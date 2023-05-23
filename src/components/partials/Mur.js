import { useState, useEffect } from "react";
import Publication from "../Publication";
import Story from "./Story";

function Mur() {
  const [items, setItems] = useState([0]);
  useEffect(() => {
    fetch("/bd/data.json")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  });

  return (
    <div className="col-md-4 col-sm-12 offset-md-1 mt-5">
      <div className="d-flex justify-content-start mb-3">
        {items.map((item) => (
          <Story name={item.name} image={item.image}></Story>
        ))}
      </div>
      {items.map((item) => (
        <Publication
          name={item.name}
          description={item.description}
          image={item.image}
          commentaires={item.commentaires}
        ></Publication>
      ))}
    </div>
  );
}
export default Mur;
