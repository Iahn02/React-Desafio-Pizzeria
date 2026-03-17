const Profile = () => {
  return (
    <div className="container mt-5 p-4 bg-light rounded shadow-sm" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4 text-center">Perfil de Usuario</h2>
      <div className="d-flex flex-column align-items-center">
        <p className="fs-5 mb-4">
          <strong>Email:</strong> usuario@example.com
        </p>
        <button className="btn btn-danger w-100 mt-3">
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;
