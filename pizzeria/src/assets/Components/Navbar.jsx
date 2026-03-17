import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";

const Navbar = () => {
    const { total } = useContext(CartContext);
    const { token, logout } = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">Pizzería Mamma Mia!</Link>
                
                <div className="collapse navbar-collapse d-flex justify-content-between">
                    <div className="navbar-nav">
                        <Link to="/" className="btn btn-outline-light text-white m-1 btn-sm">🍕 Home</Link>
                        {token ? (
                            <>
                                <Link to="/profile" className="btn btn-outline-light text-white m-1 btn-sm">🔓 Profile</Link>
                                <button className="btn btn-outline-light text-white m-1 btn-sm" onClick={logout}>🔒 Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="btn btn-outline-light text-white m-1 btn-sm">🔐 Login</Link>
                                <Link to="/register" className="btn btn-outline-light text-white m-1 btn-sm">🔐 Register</Link>
                            </>
                        )}
                    </div>
                </div>

                <div className="navbar-nav ms-auto">
                    <Link to="/cart" className="btn btn-outline-info m-1 btn-sm">🛒 Total: ${total.toLocaleString()}</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;