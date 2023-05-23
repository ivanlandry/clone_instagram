function Publication(props) {
  function handleClick() {
    let list_commentaires = document.getElementById("list_commentaires");
    if (list_commentaires.style.display === "none")
      list_commentaires.style.display = "block";
    else list_commentaires.style.display = "none";
  }

  return (
    <div className="px-1">
      <div className="d-flex">
        <span className="fw-bold fs-6 p-2">
          <img
            id="mini_img_pub"
            className="rounded-circle"
            src={props.image}
            alt=""
          />
          {props.name} <span className="fs-6 fw-normal">1 sem</span>
        </span>
        <span className="ms-auto fs-4">...</span>
      </div>
      <img src={props.image} alt="" className="img-fluid" />
      <div className="d-flex mt-3">
        <i className="fa-regular fa-heart fa-xl p-2"></i>
        <i className="fa-regular fa-comment fa-xl p-2"></i>
        <i className="fa-regular fa-paper-plane fa-xl p-2"></i>
        <i className="fa-regular fa-bookmark fa-xl ms-auto"></i>
      </div>
      <div className="mt-3">
        <span className="fw-bold">25 j'aime</span>
      </div>
      <div>
        <span className="fw-bold me-2">{props.name}</span>
        <span>{props.description}</span>
        <br />
        <span id="show_commentaires" onClick={handleClick}>
          Afficher les commentaires
        </span>
        <div id="list_commentaires">
          {props.commentaires?.map((item) => (
            <p className="text-secondary">{item}</p>
          ))}
        </div>
        <br />
        <input
          className="w-100 mb-2"
          type=""
          name=""
          placeholder="Ajouter un commentaire..."
        />
      </div>
    </div>
  );
}

export default Publication;
