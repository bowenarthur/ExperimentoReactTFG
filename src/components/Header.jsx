import React from "react";

export default (props) => (
  <div className="header">
    <h3 className="titulo-site">LISTA DE ÁLBUNS</h3>
    <ul className="menu-site">
      <li>
        <a onClick={props.onClick}>CADASTRAR ÁLBUM</a>
      </li>
    </ul>
  </div>
);
