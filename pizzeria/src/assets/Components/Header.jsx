const Header = () => {
  return (
    <header 
      className="text-center text-white py-5" 
      style={{ 
        backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&auto=format&fit=crop")', 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backgroundBlendMode: "overlay"
      }}
    >
      <h1>¡Pizzería Mamma Mia!</h1>
      <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
      <hr className="w-75 mx-auto" />
    </header>
  );
};
export default Header;