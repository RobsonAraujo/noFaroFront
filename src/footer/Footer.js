import React, { Component } from 'react';
import './Footer.scss';
import { isContext } from 'vm';

import pontosImage from "../images/icon-pontos.svg"
import farejarImage from "../images/icon-focinho.svg"

import pontosImageBranco from "../images/icon-pontos-branco.svg"
import farejarImageBranco from "../images/icon-focinho-branco.svg"

import configImage from "../images/icon-config-branco.svg";

class Footer extends Component {
    render() {
        return (
            <footer className="main-footer">
                <div>
                    <img src={this.props.page == "pontos"? pontosImage : pontosImageBranco} />
                    <p>Pontos</p>
                </div>
                <div>
                    <img src={ this.props.page == "farejar" ? farejarImage : farejarImageBranco} />
                    <p>Farejar</p>
                </div>
                <div>
                    <img src={configImage} />
                    <p>Config</p>
                </div>
            </footer>
        );
    }
}

export default Footer;
