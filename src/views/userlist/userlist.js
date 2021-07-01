import React from 'react';

import '../../../node_modules/purecss/build/pure.css'
import axios from 'axios';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
class Userlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    if (this.props.menuAtivo){
      return (
        <ReactCSSTransitionGroup transitionName = "example"
               transitionAppear = {true} transitionAppearTimeout = {500}
               transitionLeave = {true} transitionLeaveTimeout = {500}>
          <li className="pure-menu-item item">
            <a
              className="pure-menu-link link"
              onClick= {() => this.handleLoginClick("listar")}
            >
              Listar
            </a>
          </li>

          <li className="pure-menu-item item">
            <a
              className="pure-menu-link link"
              onClick= {() => this.handleLoginClick("atualizar")}
            >
              Atualizar
            </a>
          </li>

          <li className="pure-menu-item item">
            <a
              className="pure-menu-link link"
              onClick= {() => this.handleLoginClick("excluir")}
            >
              Excluir
            </a>
          </li>
          
          <li className="pure-menu-item item">
            <a
              className="pure-menu-link link"
              onClick= {() => this.handleLoginClick("single")}
            >
              Um Usuario
            </a>
          </li>

        </ReactCSSTransitionGroup>
      );
    }
    else
      return null;
  }
}
  
  export default Userlist;