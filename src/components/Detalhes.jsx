import React from "react";
import Popup from "reactjs-popup";
import ListaMusicas from "./ListaMusicas";

export default (props) => (
  <div className="modal detalhes">
    <a className="close" onClick={props.onClose}>
      &times;
    </a>
    <div>
      <h4>{props.children.nome}</h4>
      <p>Artista: {props.children.artista}</p>
      <p>Gênero: {props.children.categoria}</p>
      <p>Ano: {props.children.ano}</p>
      <p>Gravadora: {props.children.gravadora}</p>
    </div>
    <ListaMusicas onClick={(_) => {}} titulo="Músicas">
      {props.children.musicas}
    </ListaMusicas>
  </div>
);
