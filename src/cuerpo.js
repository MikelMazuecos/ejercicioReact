import React from 'react';

 class Cuerpo extends React.Component{

    constructor(props){
        super(props)
        this.state={nombres:this.props.nombres, titulo:this.props.titulo}
        this.nombre = "Mikel"
    }

    add(){
        this.state.nombres.push(this.nombre)
        this.setState({nombres:this.state.nombres})
    }

    cambiartitulo(){
        this.state.titulo = "Nuevo titulo"
        this.setState({titulo:this.state.titulo})
    }

    render(){

        return (
            <div>
                <ul>
                {this.state.nombres.map((a,index) => {
                        return (
                            <div key={index}>                               
                                <li>{a}</li>
                            </div>
                        );
                    })}
                <button onClick={()=>this.add()}>Añadir nombre a la lista</button>
                <button onClick={()=>this.cambiartitulo()}>Cambiar titulo</button>
                </ul>
                </div> 
        )
    }   
}

export default Cuerpo