import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <section className="main-login">
        <form class="container-form">
          <input type="text" placeholder="Nome" />
          <input type="password" placeholder="Password" />
          <button>ENTRAR</button>
        </form>
      </section>
    );
  }
}

export default Login;
