import ListaMusicas from "./ListaMusicas";
import React from "react";

export default class EdicaoMusicas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      duracao: ""
    };
  }

  handleChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value
    });

  adicionarMusica = (_) => {
    if (this.state.nome !== "" && this.state.duracao !== "") {
      let musicas = this.props.musicas ?? [];
      musicas.push({ nome: this.state.nome, duracao: this.state.duracao });
      this.props.onChange(musicas);

      this.setState({
        nome: "",
        duracao: ""
      });
    }
  };

  removerMusica = (nome) => {
    const musicas = this.props.musicas.filter((item) => item.nome !== nome);
    this.props.onChange(musicas);
  };

  render() {
    return (
      <div className="edicao">
        <h3>Músicas</h3>
        <br />
        <label htmlFor="nome">Nome: </label>
        <input
          type="text"
          name="nome"
          value={this.state.nome}
          onChange={this.handleChange}
        />
        <br />
        <label htmlFor="duracao">Duração: </label>
        <input
          type="text"
          name="duracao"
          value={this.state.duracao}
          onChange={this.handleChange}
        />
        <button type="button" onClick={this.adicionarMusica}>
          Adicionar
        </button>

        <ListaMusicas onClick={this.removerMusica} titulo="">
          {this.props.musicas}
        </ListaMusicas>
      </div>
    );
  }
}
