import React from "react";
import EdicaoMusicas from "./EdicaoMusicas";
import { inserirAlbum, atualizarAlbum } from "../Servico";

export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      capa: "",
      categoria: this.categorias[0],
      artista: "",
      ano: "",
      gravadora: "",
      musicas: []
    };
  }

  categorias = [
    "Eletrônica",
    "MPB",
    "Pop",
    "Rap",
    "Reggae",
    "Rock",
    "Samba",
    "Sertanejo"
  ];

  componentDidMount = () => {
    if (this.props.album._id) {
      this.setState(this.props.album);
    }
  };

  atualizarMusicas = (musicas) => this.setState({ musicas });

  handleChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value
    });

  submit = (event) => {
    event.preventDefault();
    const data = this.state;
    this.props.album._id
      ? atualizarAlbum(this.props.album._id, data)
      : inserirAlbum(data);
  };

  render() {
    return (
      <div className="modal">
        <a className="close" onClick={this.props.onClose}>
          &times;
        </a>
        <form onSubmit={this.submit}>
          <h2>Cadastro de Álbum</h2>
          <div className="formulario">
            <div>
              <label htmlFor="nome">Nome: </label>
              <input
                type="text"
                name="nome"
                value={this.state.nome}
                onChange={this.handleChange}
                required
              />
              <br />
              <label htmlFor="capa">URL da capa: </label>
              <input
                type="text"
                name="capa"
                value={this.state.capa}
                onChange={this.handleChange}
                required
              />
              <br />
              <label htmlFor="categoria">Gênero: </label>
              <select
                name="categoria"
                value={this.state.categoria}
                onChange={this.handleChange}
                required
              >
                {this.categorias.map((categoria) => (
                  <option key={categoria} value={categoria}>
                    {categoria}
                  </option>
                ))}
              </select>
              <br />
              <label htmlFor="artista">Artista: </label>
              <input
                type="text"
                name="artista"
                value={this.state.artista}
                onChange={this.handleChange}
                required
              />
              <br />
              <label htmlFor="ano">Ano: </label>
              <input
                type="number"
                name="ano"
                value={this.state.ano}
                onChange={this.handleChange}
                required
              />
              <br />
              <label htmlFor="gravadora">Gravadora: </label>
              <input
                type="string"
                name="gravadora"
                value={this.state.gravadora}
                onChange={this.handleChange}
                required
              />
              <br />
            </div>
            <EdicaoMusicas
              musicas={this.state.musicas}
              onChange={this.atualizarMusicas}
            />
          </div>
          <input type="submit" className="botao-cadastrar" value="Enviar" />
        </form>
      </div>
    );
  }
}
