import React, { Component } from 'react';
import iconYellowHouse from "../images/icon-casa-amarela-destaque.svg"


import './scss/BiddingsIcons.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class SuspectBidding extends Component {

  constructor(props) {

    super(props);
    this.state = {
      showInfo: false
    }

    this.notify = () => toast("Wow so easy !");

  }


  render() {
    return (

      <div className="main-icons">
        <div className="iconYellowHouse" onClick={() => { this.setState({ showInfo: !this.state.showInfo }) }}>
        </div>

        <div style={{ display: this.state.showInfo || "none" }} className="biddingInfo">
          <header className="title">
            <h2>Obra Suspeita 1</h2>
            <h3>Obra Suspeita</h3>
          </header>

          <div className="values">
            <div><h2>Valor licitação:</h2>  <p>100.000,00 R$</p></div>
            <div><h2>Valor Faro:</h2>  <p>



              50.000,00 R$</p></div>
          </div>

          <div className="message">
            <p> Está obra NÃO está dentro da <span style={{ textDecoration: "underline" }}>margen de seguranção</span> considerada pelo NO FARO</p>
          </div>

          <footer>
            <button onClick={() => { console.log(`cliquei em detalhes`) }}> DETALHES</button>
            <button onClick={() => alert(`Parabéns você lutou contra a corrupção e ainda ganhou 1 ponto!`)}> ASSINALAR</button>
          </footer>

        </div>
      </div>
    );
  }
}

export default SuspectBidding;
