import MenuLateral from "./partials/MenuLateral";

function Profil() {
  let profil =
    "https://play-lh.googleusercontent.com/OYlJFC4rf9Lg6kxRPe6JIkHbP5A_51LGtm7bXcOG3xJ5ZQ_gVLOT8Um_Pijcj2NFX0yy";
  return (
    <div className="container-fluid">
      <div className="row">
        <MenuLateral profil={profil}></MenuLateral>
        <div className="col-md-6 offset-md-1 mt-5">
          <div className="d-flex justify-content-around">
            <img
              src={profil}
              alt="profil"
              className="img-fluid rounded-circle h-25 w-25"
            />
            <div>
              <div>
                <span>landryivan.96</span>
                <button className="btn btn-secondary ms-3">
                  Modifier profil
                </button>
                <i className="fa-solid fa-gear fa-xl ms-3"></i>
              </div>
              <div className="mt-3">
                <span className="fw-bold">0 </span> publications
                <span className="ms-3">
                  <span className="fw-bold">2</span> followers
                </span>
                <span className="ms-3">
                  <span className="fw-bold">12 </span> suivies
                </span>
              </div>
              <div className="mt-3">
                <span className="fw-bold">ivan landry</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
