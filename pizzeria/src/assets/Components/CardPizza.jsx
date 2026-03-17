import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CardPizza = ({ id, name, price, ingredients, img }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="card h-100" style={{ width: '18rem' }}>
      <img 
        src={img} 
        className="card-img-top" 
        alt={name} 
        style={{ height: "200px", objectFit: "cover" }} 
      />
      <div className="card-body">
        <h5 className="card-title text-center">Pizza {name}</h5>
      </div>
      <ul className="list-group list-group-flush text-center">
        <li className="list-group-item text-muted">Ingredientes:</li>
        {ingredients.map((ingredient, index) => (
          <li key={index} className="list-group-item small">
            🍕 {ingredient}
          </li>
        ))}
      </ul>
      <div className="card-body text-center">
        <h4>${price}</h4>
        <div className="d-flex justify-content-around">
          <button className="btn btn-light border">Ver Más 👀</button>
          <button className="btn btn-dark" onClick={() => addToCart({ id, name, price, img })}>Añadir 🛒</button>
        </div>
      </div>
    </div>
  );
};
export default CardPizza;