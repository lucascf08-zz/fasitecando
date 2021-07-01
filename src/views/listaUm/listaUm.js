import React, { Component } from "react";
import { useEffect } from "react";
import axios from "axios";
import '../../../node_modules/purecss/build/pure.css'

import { confirmAlert } from 'react-confirm-alert'; 
import '../../../node_modules/react-confirm-alert/src/react-confirm-alert.css'

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class ListaUm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      sobrenome:"",
      avatar:""
    };

  }
  
  componentDidMount() {
    axios
      .get("https://reqres.in/api/users/2")
      .then(response => {
        this.successShow(response);
      })
      .catch(error => {
        this.successShow(error);
      });
  }

  confirma = () => {
    confirmAlert({
      title: 'Confirma?',
      message: 'Deseja excluir o registro?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => this.deletar()
        },
        {
          label: 'Não',
        }
      ]
    });
  };

  deletar = () => {
    axios.delete('https://reqres.in/api/users/2').then(
      (response) => {
        
        if (response.status === 204) {
            alert("Registro excluído com sucesso", response.message);
 
        }

      }
    )
    .catch((error) => {
      console.log(error);
      alert("Erro ao deletar! tente novamente");
    });
  }

  successShow(response) {
    this.setState({
      nome: response.data.data.first_name,
      sobrenome: response.data.data.last_name,
      avatar: response.data.data.avatar
    });
  }

    render() {
        if (this.props.secaoAtiva == "listarUm"){
            
            return (
                <ReactCSSTransitionGroup transitionName = "example"
                transitionAppear = {true} transitionAppearTimeout = {500}
                transitionLeave = {true} transitionLeaveTimeout = {500}>
               
                <div className="pure-g">
                    <div className="pure-u-1">             
                                {this.state.nome} {this.state.sobrenome} 
                                <br></br>
                                <img 
                                    className="avatar" 
                                    src={this.state.avatar}></img>        
                    </div>

                    <div className="pure-u-1">                    
                      <FormAtualizar />
                    </div>

                    <div className="pure-u-1 div-botoes">
                      <a
                        className="pure-button"
                        onClick= {() => this.confirma()}
                      >
                        Excluir
                      </a>
                    </div>
                </div>
                
                </ReactCSSTransitionGroup>
            );
        }
        else 
            return null;
    }
}
export default ListaUm;

class FormAtualizar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      atualizar_nome: "",
      job:"",
    };


  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  atualizar = () => {
    if (this.state.job == ""){
      alert("Preencher o campo emprego!");
      return;
    }
    else if (this.state.atualizar_nome ==""){
      alert("Preencher o campo nome!");
      return;
    }
    
    const req = {
      name: this.state.atualizar_nome,
      job: this.state.job,
    };

    axios.put('https://reqres.in/api/users/2', req).then(
      (response) => {
        
        if (response.status === 200) {
            alert("Atualizado com sucesso", response.message);
 
        }

      }
    )
    .catch((error) => {
      console.log(error);
      alert("Erro ao atualizar. Tente novamente");
    });
    
  }

  
  render() {
    if (true){
      return (
        <ReactCSSTransitionGroup transitionName = "example"
               transitionAppear = {true} transitionAppearTimeout = {500}
               transitionLeave = {true} transitionLeaveTimeout = {500}>
        <form className="pure-form pure-form-stacked form-atualizar" onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>Atualizar</legend>
            <input 
              type="text" 
              name="atualizar_nome"
              //className="input" 
              value={this.state.atualizar_nome}
              onChange={this.handleInputChange} 
              required
              minLength='4'
              placeholder="Nome" 
  
            />
            
            <input 
              type="text" 
              name="job"
              //className="input"
              value={this.state.job}
              onChange={this.handleInputChange} 
              required
              minLength='4'
              placeholder="Emprego" 

            />
    
            <a
              onClick = {() => this.atualizar()}
              className="pure-button pure-button-primary input"
            >
              Enviar
            </a>
          </fieldset>
        </form>
        </ReactCSSTransitionGroup>
      );
    }
    else
      return null;
  }
}
