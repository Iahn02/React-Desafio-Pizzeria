import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-4">Página no encontrada</h2>
      <p className="lead mb-5">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Link to="/" className="btn btn-primary btn-lg">
        Volver a la página principal
      </Link>
    </div>
  );
};

export default NotFound;
