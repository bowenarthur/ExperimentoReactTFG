import React from "react";
import Album from "./Album";

export default (props) => (
  <div>
    <h3>{props.titulo}</h3>
    <div className="scrollmenu row dragscroll">
      {props.albuns.map((album) => (
        <Album
          key={album._id}
          album={album}
          mostrarForm={() => props.mostrarForm(album)}
          mostrarDetalhes={() => props.mostrarDetalhes(album)}
        ></Album>
      ))}
    </div>
  </div>
);
