# Pizzería - Mamma Mia!

¡Bienvenido al repositorio de nuestro proyecto Pizzería! Este proyecto se está construyendo paso a paso como parte de los desafíos del Bootcamp de React.

## Índice
1. [Fase 1: Creación del proyecto y primeras vistas](#fase-1-creación-del-proyecto-y-primeras-vistas)
2. [Fase 2: Componentes de Register y Login](#fase-2-componentes-de-register-y-login)
3. [Fase 3: Componentes estáticos y dinámicos (Home y Cart)](#fase-3-componentes-estáticos-y-dinámicos-home-y-cart)

---

## Fase 1: Creación del proyecto y primeras vistas

En esta fase inicial, configuramos la base del proyecto utilizando Vite y creamos la estructura fundamental de la aplicación. Se implementaron los componentes estáticos principales que definen la vista principal o *Home*:

- **Navbar**: Barra de navegación superior.
- **Header**: Cabecera principal con información destacada.
- **Home**: Vista principal que muestra las opciones de pizzas.
- **Footer**: Pie de página de la aplicación.

### Capturas de la vista Home (Fase 1)
![Home View - Parte 1](./public/screenshots/home-1.png)
![Home View - Parte 2](./public/screenshots/home-2.png)

---

## Fase 2: Componentes de Register y Login

En la segunda fase, nos enfocamos en la creación de los formularios de autenticación para los usuarios.

- **Register**: Formulario de registro con validaciones de contraseñas.
- **Login**: Formulario de inicio de sesión básico.

### Captura de la vista Register
![Register View](./public/screenshots/register.png)

### Captura de la vista Login
![Login View](./public/screenshots/login.png)

---

## Fase 3: Componentes estáticos y dinámicos (Home y Cart)

En esta tercera fase, nos enfocamos en refactorizar la vista Home para que consuma datos dinámicos y en crear la vista del carrito de compras.

- **Home**: Refactorizada para importar el arreglo de pizzas desde `pizzas.js` y renderizar dinámicamente los componentes `CardPizza`.
- **CardPizza**: Componente actualizado para recibir datos de cada pizza mediante *props* y renderizar su información de forma dinámica.
- **Cart**: Nuevo componente que simula un carrito de compras. Muestra los detalles de las pizzas agregadas, permite aumentar o disminuir la cantidad y calcula el precio total automáticamente.

### Captura de la vista Home (Fase 3)
![Home View - Fase 3](./public/screenshots/home-phase3.png)

### Captura de la vista Cart
![Cart View](./public/screenshots/cart.png)

