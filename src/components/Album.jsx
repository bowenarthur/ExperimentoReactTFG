import React from "react";
import { excluirAlbum } from "../Servico";

export default (props) => (
  <div className="column">
    <div className="botoes">
      <a className="edit" onClick={props.mostrarForm}>
        &#9998;
      </a>
      <a className="delete" onClick={() => excluirAlbum(props.album._id)}>
        &#128465;
      </a>
    </div>
    <div className="card" onClick={props.mostrarDetalhes}>
      <img alt="" src={props.album.capa} />
      <p>{props.album.nome}</p>
    </div>
  </div>
);
