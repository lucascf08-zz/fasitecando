import React, { Component } from "react";
import axios from "axios";
import '../../../node_modules/purecss/build/pure.css'

var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class Listagem extends Component {
  state = {
    people: []
  };

  componentDidMount() {
    axios
      .get("https://reqres.in/api/users")
      .then(response => {
        this.successShow(response);
      })
      .catch(error => {
        this.successShow(error);
      });
  }

  successShow(response) {
    this.setState({
      people: response.data.data
    });
  }

    render() {
        if (this.props.secaoAtiva == "listar"){
            
            return (
                <ReactCSSTransitionGroup transitionName = "example"
                transitionAppear = {true} transitionAppearTimeout = {500}
                transitionLeave = {true} transitionLeaveTimeout = {500}>
                
                <div className="pure-g">
                    <div className="pure-u-1">
                        {this.state.people.map(({id, first_name, last_name, avatar}) => (
                            <div className="pure-u-1-3 div-img" key={id}>
                                {first_name} {last_name} 
                                <br></br>
                                <img 
                                    className="avatar" 
                                    src={avatar}></img>
                            </div>
                        ))}
                    </div>
                </div>
                
                </ReactCSSTransitionGroup>
            );
        }
        else 
            return null;
    }
}
export default Listagem;