import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  const screenshotsDir = path.join(__dirname, 'public', 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  // Go to Register first
  await page.goto('http://localhost:5173/register');
  await page.type('input[type="email"]', 'test3@example.com');
  await page.type('input[type="password"]', '123123');
  // Third input is confirm password
  const inputs = await page.$$('input[type="password"]');
  if (inputs.length > 1) {
      await inputs[1].type('123123');
  } else {
      await page.type('input[type="password"]', '123123');
  }
  await page.click('button[type="submit"]');
  await new Promise(r => setTimeout(r, 2000)); // Give it a bit to register

  // Go to Login
  await page.goto('http://localhost:5173/login');
  await page.type('input[type="email"]', 'test@test.com'); // use existing user
  await page.type('input[type="password"]', '123123');
  await page.screenshot({ path: path.join(screenshotsDir, 'login-success-phase8.png') });
  console.log('Saved login-success-phase8.png (filled)');
  
  await Promise.all([
    page.click('button[type="submit"]'),
    page.waitForNavigation({ waitUntil: 'networkidle0' }).catch(() => {})
  ]);

  // Go to Profile (which triggers getProfile)
  await page.click('a[href="/profile"]');
  await page.waitForFunction(() => document.body.innerText.includes('test@test.com'));
  await page.screenshot({ path: path.join(screenshotsDir, 'profile-phase8.png') });
  console.log('Saved profile-phase8.png');

  // Go to Home and add a pizza to cart
  await page.click('a[href="/"]');
  await new Promise(r => setTimeout(r, 1000));
  // find first add to cart button
  // In Phase 3, the button might say "Añadir" or have a specific class. 
  // Let's just go straight to cart, CartContext has state. We evaluate a function to set cart or add to it...
  // Or just click any button that has text "Añadir"
  try {
    const buttons = await page.$$('button');
    for (const btn of buttons) {
      const text = await page.evaluate(el => el.textContent, btn);
      if (text.includes('Añadir')) {
        await btn.click();
        break; // just add one
      }
    }
  } catch(error) {
    console.log("No add to cart buttons found or other error", error);
  }

  await page.click('a[href="/cart"]');
  await new Promise(r => setTimeout(r, 1000));
  
  // Click Pagar using evaluate to avoid intercept errors
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('Pagar'));
    if (btn) btn.click();
  });

  // Wait for success message
  try {
    await page.waitForSelector('.alert-info', { timeout: 10000 });
    await page.screenshot({ path: path.join(screenshotsDir, 'cart-checkout-phase8.png') });
    console.log('Saved cart-checkout-phase8.png');
  } catch (e) {
    console.log('Failed to see checkout message:', e);
    await page.screenshot({ path: path.join(screenshotsDir, 'cart-checkout-failed.png') });
  }

  await browser.close();
})();
