import React from 'react';
import reactDom from 'react-dom';

import Login from './views/login/login.js';
import Registro from './views/registro/registro.js';

import Userlist from './views/userlist/userlist.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secaoAtiva: "",
      menuAtivo: false
    };  
  }

  handleLoginClick(e) {
    this.setState(() => ({
      secaoAtiva : e
    }));
  }

  handleMouseOver() {
    this.setState(() => ({
     menuAtivo : !this.state.menuAtivo
    }));
  }
  render(){
    return ( 
    document.documentElement.lang = 'pt-br',
    <div className="pure-g"> 
      <div className="pure-u-1 div-side">
        <div className="menu-bar">

          <a
            className="pure-menu-link botao"
            onClick= {() => this.handleLoginClick("login")}
          >
            Login
          </a>

          <a
            className="pure-menu-link botao"
            onClick= {() => this.handleLoginClick("registro")}
          >
            Registrar
          </a>
          <ul className="pure-menu-list list"
              onMouseEnter= {() => this.handleMouseOver()}
              onMouseLeave= {() => this.handleMouseOver()}>
            <li className="pure-menu-item item"> 
              <a
              className="pure-menu-link link"
              
              
              >
              Usuarios
              </a>

            </li>
            <Userlist menuAtivo={this.state.menuAtivo}/>
  
          </ul>
         

          
        </div>
    </div>
    
    <div className="pure-u-1 div-central">
      <Login secaoAtiva={this.state.secaoAtiva} />
      <Registro secaoAtiva={this.state.secaoAtiva} />
    </div>
      
    <div className="pure-u-1 div-header">
      fasitecando por Lucas C. Ferreira
    </div> 
  </div>
  );
} 
   
}

export default App;
