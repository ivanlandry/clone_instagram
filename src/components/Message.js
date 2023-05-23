import {useState, useEffect} from "react";
import MenuLateral from "./partials/MenuLateral";

function Message() {

    const [messages, setMessages] = useState([0]);

    useEffect(() => {
        fetch("/bd/data.json")
            .then(response => response.json())
            .then(data => {
                setMessages(data);
            });
    });

    let profil = "https://play-lh.googleusercontent.com/OYlJFC4rf9Lg6kxRPe6JIkHbP5A_51LGtm7bXcOG3xJ5ZQ_gVLOT8Um_Pijcj2NFX0yy";
    return (
        <div className="container-fluid">
            <div className="row">
                <MenuLateral profil={profil}></MenuLateral>
                <div className="col-md-8 offset-md-1 d-flex justify-content-between mt-2 border messages">

                    <div className="card card_messages">
                        <div className="card-header fw-bolder">
                            Messages
                        </div>
                        <ul className="list-group list-group-flush">

                            {messages.map(item => (
                                item.commentaires?.map((comment, id) => (
                                    <li className="list-group-item" key={id}>{comment}</li>
                                ))
                            ))}
                        </ul>
                    </div>

                    <div className="my-auto text-center">
                        <i className="fa-regular fa-paper-plane border border-dark rounded-circle px-3 py-3"></i>
                        <p className="">Vos messages</p>
                        <p>Envoyez des photos et des messages privés à un(e) ami(e) ou à un groupe</p>
                        <button className="btn btn-primary">Envoyer un message</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Message;