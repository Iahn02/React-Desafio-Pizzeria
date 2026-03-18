import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { email, logout, getProfile } = useContext(UserContext);

  useEffect(() => {
    getProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container mt-5 p-4 bg-light rounded shadow-sm" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4 text-center">Perfil de Usuario</h2>
      <div className="d-flex flex-column align-items-center">
        <p className="fs-5 mb-4">
          <strong>Email:</strong> {email || "Cargando..."}
        </p>
        <button className="btn btn-danger w-100 mt-3" onClick={logout}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;
