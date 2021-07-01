import React from 'react';

import '../../../node_modules/purecss/build/pure.css'
import axios from 'axios';
class Login extends React.Component {
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
            alert("Login foi efetuado com sucesso", response.message);
 
        }

      }
    )
    .catch((error) => {
      console.log(error);
      alert("Credenciais inválidas. Tente novamente");
    });
    
    event.preventDefault();
  }

  render() {
    if (this.props.secaoAtiva == "login"){
      return (
        <form className="pure-form pure-form-stacked form" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Login</legend>
  
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
    
            <button type="submit" className="pure-button pure-button-primary input">Entrar</button>
          </fieldset>
        </form>
      );
    }
    else
      return null;
  }
}
  
  export default Login;