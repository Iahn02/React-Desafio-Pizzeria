import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const { register } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validaciones
    if (!email || !password || !confirmPassword) {
      setError(true);
      setMessage("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setError(true);
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError(true);
      setMessage("Las contraseñas no coinciden.");
      return;
    }

    const success = await register(email, password);
    if (success) {
      setError(false);
      setMessage("¡Registro exitoso!");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } else {
      setError(true);
      setMessage("Error en el registro.");
    }
  };

  return (
    <div className="container my-5">
      <h2>Registro</h2>
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
        <div className="mb-3">
          <label className="form-label">Confirmar contraseña</label>
          <input 
            type="password" 
            className="form-control" 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
      {message && (
        <div className={`alert mt-3 ${error ? 'alert-danger' : 'alert-success'}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Register;
