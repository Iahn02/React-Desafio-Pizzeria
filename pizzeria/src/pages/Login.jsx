import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const { login } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    if (!email || !password) {
      setError(true);
      setMessage("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setError(true);
      setMessage("El password debe tener al menos 6 caracteres.");
      return;
    }

    // Auth
    const success = await login(email, password);
    if (success) {
      setError(false);
      setMessage("¡Sesión iniciada exitosamente!");
      setEmail("");
      setPassword("");
    } else {
      setError(true);
      setMessage("Error al iniciar sesión.");
    }
  };

  return (
    <div className="container my-5">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input 
            type="password" 
            className="form-control" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
      {message && (
        <div className={`alert mt-3 ${error ? 'alert-danger' : 'alert-success'}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Login;
