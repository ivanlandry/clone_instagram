import { Link } from "react-router-dom";
import MenuLateral from "./partials/MenuLateral";
import Mur from "./partials/Mur";
function Home() {
  let profil =
    "https://play-lh.googleusercontent.com/OYlJFC4rf9Lg6kxRPe6JIkHbP5A_51LGtm7bXcOG3xJ5ZQ_gVLOT8Um_Pijcj2NFX0yy";

  return (
    <div className="container-fluid">
      <div className="row content-home">
        <MenuLateral profil={profil}></MenuLateral>
        <Mur></Mur>
        <div className="col-md-3 offset-md-1 mt-5">
          <div className="d-flex profil-right">
            <img
              src={profil}
              alt="profil"
              className="me-3 rounded-circle story"
            />

            <p className="mt-2">
              <span className="fw-bold">landry.ivan.96</span> <br />
              <span className="text-secondary"> landry ivan</span>
            </p>
            <div className="ms-auto mt-3">
              <Link to="#" className="link text-primary">
                Basculer
              </Link>
            </div>
          </div>
          <div className="d-flex profil-right justify-content-between mt-3">
            <p className="text-secondary fw-bold">Suggestion pour vous</p>
            <div>
              <Link to="#" className="link fw-bold text-dark">
                Voir tout
              </Link>
            </div>
          </div>
          <div className="d-flex profil-right">
            <img
              src={profil}
              alt="profil"
              className="me-3 mt-3 rounded-circle profil"
            />

            <p className="mt-2">
              <span className="fw-bold">landry.ivan.96</span> <br />
              <span className="text-secondary"> landry ivan</span>
            </p>
            <div className="ms-auto mt-3">
              <Link to="#" className="link text-primary">
                Suivre
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
