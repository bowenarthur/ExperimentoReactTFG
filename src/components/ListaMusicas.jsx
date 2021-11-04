import React from "react";

export default (props) =>
  props.children
    ? props.children.length !== 0 && (
        <div>
          <h4>{props.titulo}</h4>
          <table className="tabela">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Duração</th>
              </tr>
            </thead>
            <tbody>
              {props.children &&
                props.children.map((musica) => (
                  <tr
                    key={musica.nome}
                    onClick={() => props.onClick(musica.nome)}
                  >
                    <td>{musica.nome}</td>
                    <td>{musica.duracao}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )
    : "";
