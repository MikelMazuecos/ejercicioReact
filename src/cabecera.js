import React from 'react';

 class Cabecera extends React.Component{

    constructor(props){
        super(props)
        this.state={titulo:this.props.titulo}
    }

    render(){

        return (
            <div> 
                <h1>{this.state.titulo}</h1>
            </div>
        )
    }   
}

export default Cabecera