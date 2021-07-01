import React from 'react';

import '../../../node_modules/purecss/build/pure.css'
import axios from 'axios';

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
class Registro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      senha:"",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {

    const req = {
      email: this.state.user,
      password: this.state.senha,
    };

    axios.post('https://reqres.in/api/register', req).then(
      (response) => {
        
        if (response.status === 200) {
            alert("Registro foi efetuado com sucesso", response.message);
 
        }

      }
    )
    .catch((error) => {
      console.log(error);
      alert("Dados inválidos. Tente novamente");
    });
    
    event.preventDefault();
  }

  render() {
    if (this.props.secaoAtiva == "registro"){
      return (
        <ReactCSSTransitionGroup transitionName = "example"
               transitionAppear = {true} transitionAppearTimeout = {500}
               transitionLeave = {true} transitionLeaveTimeout = {500}>
        <form className="pure-form pure-form-stacked form" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Cadastro</legend>
  
            <input 
              type="email" 
              name="user"
              className="input" 
              value={this.state.user}
              onChange={this.handleInputChange} 
              required
              placeholder="Email" 
  
            />
            
            <input 
              type="password" 
              name="senha"
              className="input"
              value={this.state.senha}
              onChange={this.handleInputChange} 
              required
              minLength='4'
              placeholder="Senha" 

            />
    
            <button type="submit" className="pure-button pure-button-primary input">Cadastrar</button>
          </fieldset>
        </form>
        </ReactCSSTransitionGroup>
      );
    }
    else
      return null;
  }
}
  
  export default Registro;