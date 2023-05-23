import { Link } from "react-router-dom";

function MenuLateral(props) {
  return (
    <div className="col-md-2 col-sm-12 mt-1 menuLateral ms-3">
      <h1 className="mt-5">Instagram</h1>

      <div className="mt-5">
        <Link to="/" className="link">
          <i className="fa-sharp fa-solid fa-house fa-xl"></i>{" "}
          <span className="ms-3 fw-bold">Accueil</span>
        </Link>
      </div>
      <div className="mt-4">
        <i className="fa-solid fa-magnifying-glass fa-xl"></i>{" "}
        <span className="ms-3">Recherche</span>
      </div>
      <div className="mt-4">
        <i className="fa-regular fa-compass fa-xl"></i>{" "}
        <span className="ms-3">Decouvrir</span>
      </div>
      <div className="mt-4">
        <i className="fa-solid fa-magnifying-glass fa-xl"></i>{" "}
        <span className="ms-3">Réels</span>
      </div>
      <div className="mt-4">
        <Link to="/messages" className="link">
          <i className="fa-brands fa-facebook-messenger fa-xl"></i>{" "}
          <span className="ms-3">Messages</span>
        </Link>
      </div>
      <div className="mt-4">
        <i className="fa-regular fa-heart fa-xl"></i>{" "}
        <span className="ms-3">Notifications</span>
      </div>
      <div className="mt-4">
        <i className="fa-regular fa-square-plus fa-xl"></i>
        <span className="ms-3">Creer</span>
      </div>
      <div className="mt-4">
        <img src={props.profil} alt="" className="rounded-circle profil" />
        <Link to="/profil" className="link">
          Profil
        </Link>
      </div>
      <div className="mt-5">
        <i className="fa-solid fa-bars fa-xl"></i>
        <span className="ms-3">Plus</span>
      </div>
    </div>
  );
}

export default MenuLateral;
