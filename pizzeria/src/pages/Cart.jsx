import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, total } = useContext(CartContext);
  const { token } = useContext(UserContext);

  return (
    <div className="container mt-5 p-4 bg-light rounded" style={{ maxWidth: '600px' }}>
      <h3 className="mb-4">Detalles del pedido:</h3>
      
      {cart.map((pizza) => (
        <div key={pizza.id} className="d-flex justify-content-between align-items-center mb-3 p-3 bg-white rounded shadow-sm">
          <div className="d-flex align-items-center">
            <img src={pizza.img} alt={pizza.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '5px' }} className="me-3" />
            <h5 className="mb-0 text-capitalize">{pizza.name}</h5>
          </div>
          <div className="d-flex align-items-center">
            <h5 className="mb-0 me-4">${pizza.price.toLocaleString("es-CL")}</h5>
            <button className="btn btn-outline-danger btn-sm" onClick={() => decreaseQuantity(pizza.id)}>-</button>
            <span className="mx-3 fw-bold">{pizza.count}</span>
            <button className="btn btn-outline-primary btn-sm" onClick={() => increaseQuantity(pizza.id)}>+</button>
          </div>
        </div>
      ))}

      <div className="mt-4">
        <h2>Total: ${total.toLocaleString("es-CL")}</h2>
        <button className="btn btn-dark mt-2" disabled={!token}>Pagar</button>
      </div>
    </div>
  );
};

export default Cart;
