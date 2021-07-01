import React from 'react';
import '../../node_modules/purecss/build/pure.css'

class Botao extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          nome: "Botao",
          link: "",
          classe:"pure-button pure-button-primary botao",
        };
    }

    render(){
        return(
            <a
            className= {this.props.classe}
            href= {this.props.link}

            >
                {this.props.nome}
            </a>
        )    
    } 
}

export default Botao;