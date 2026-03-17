import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Pizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error("Error fetching pizza:", error);
      }
    };
    fetchPizza();
  }, [id]);

  if (!pizza) {
    return (
      <div className="container my-5 text-center">
        <h2>Cargando pizza...</h2>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-5">
            <img 
              src={pizza.img} 
              className="img-fluid rounded-start" 
              alt={pizza.name} 
              style={{ height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h5 className="card-title text-capitalize fs-3">Pizza {pizza.name}</h5>
              <p className="card-text">{pizza.desc}</p>
              
              <ul className="list-group list-group-flush mb-3">
                <li className="list-group-item text-muted"><strong>Ingredientes:</strong></li>
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index} className="list-group-item text-capitalize border-0 py-1">
                    🍕 {ingredient}
                  </li>
                ))}
              </ul>
              
              <div className="d-flex justify-content-between align-items-center mt-4">
                <h4 className="mb-0 fw-bold">Precio: ${pizza.price}</h4>
                <button className="btn btn-dark" onClick={() => addToCart({ id: pizza.id, name: pizza.name, price: pizza.price, img: pizza.img })}>Añadir 🛒</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
