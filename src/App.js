import "./style.css";
import React from "react";
import Popup from "reactjs-popup";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListaAlbuns from "./components/ListaAlbuns";
import Detalhes from "./components/Detalhes";
import { lerAlbuns } from "./Servico";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      album: {},
      openDetalhes: false,
      openForm: false,
      albuns: [],
      albunsSertanejo: []
    };
  }

  async componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/dragscroll/0.0.8/dragscroll.min.js";
    script.async = true;
    document.body.appendChild(script);
    this.fetchData();
  }

  fetchData = (_) => {
    lerAlbuns().then((res) => this.setState({ albuns: res.data }));
    lerAlbuns("Sertanejo").then((res) =>
      this.setState({ albunsSertanejo: res.data })
    );
  };

  mostrarDetalhes = (album) =>
    this.setState({
      album: album,
      openDetalhes: true,
      openForm: false
    });

  fecharDetalhes = (_) =>
    this.setState({
      album: {},
      openDetalhes: false
    });

  mostrarForm = (album) =>
    this.setState({
      album: album,
      openDetalhes: false,
      openForm: true
    });

  fecharForm = (_) => {
    this.setState({
      album: {},
      openForm: false
    });
    this.fetchData();
  };

  render() {
    return (
      <div className="app">
        <Header onClick={() => this.mostrarForm({})} />
        <ListaAlbuns
          titulo="Últimos Álbuns"
          albuns={this.state.albuns}
          mostrarForm={this.mostrarForm}
          mostrarDetalhes={this.mostrarDetalhes}
        />
        <ListaAlbuns
          titulo="Sertanejo"
          albuns={this.state.albunsSertanejo}
          mostrarForm={this.mostrarForm}
          mostrarDetalhes={this.mostrarDetalhes}
        />
        <Popup open={this.state.openDetalhes} onClose={this.fecharDetalhes}>
          <Detalhes onClose={this.fecharDetalhes}>{this.state.album}</Detalhes>
        </Popup>
        <Popup open={this.state.openForm} onClose={this.fecharForm}>
          <Formulario album={this.state.album} onClose={this.fecharForm} />
        </Popup>
      </div>
    );
  }
}
