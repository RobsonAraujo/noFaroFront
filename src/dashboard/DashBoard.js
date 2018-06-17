import React, { Component } from 'react';
import './DashBoard.scss';
import { isContext } from 'vm';
import Footer from '../footer/Footer'

class DashBoard extends Component {
    render() {
        return (
            <div>
                <section className="dashboard-section">
                    <h1>Meus pontos</h1>
                    <div className="container-total">
                        <div>
                            <h2>Total de Pontos</h2>
                            <h3>17 pontos</h3>
                        </div>
                        <div>
                            <h2>Total de Cupons</h2>
                            <h3>3 cupons</h3>
                        </div>
                    </div>

                    <nav>
                        <button className="selected">
                            Pontos
                        </button>
                        <button>
                            Cupons
                        </button>
                    </nav>

                    <ul>

                        <li>
                            <div>
                                <h2>Denúncia assinada</h2>
                                <h3>12/05/2018 </h3>
                            </div>
                            <p>1+</p>
                        </li>

                        <li>
                            <div>
                                <h2>Denúncia assinada</h2>
                                <h3>12/05/2018 </h3>
                            </div>
                            <p>1+</p>
                        </li>

                             <li>
                            <div>
                                <h2>Denúncia assinada</h2>
                                <h3>12/05/2018 </h3>
                            </div>
                            <p>1+</p>
                        </li>

                             <li>
                            <div>
                                <h2>Denúncia assinada</h2>
                                <h3>12/05/2018 </h3>
                            </div>
                            <p>1+</p>
                        </li>
                    </ul >


                </section >
                <Footer page="dashboard" />
            </div >
        );
    }
}

export default DashBoard;
