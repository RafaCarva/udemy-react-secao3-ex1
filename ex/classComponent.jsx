import React, {Component} from 'react'

export default class ClassComponent extends Component{
    
     constructor(props){
       
       //se não chamar o super() vai dar erro
       super(props);
       this.state = {value: props.initialValue}


    }

    sum(delta){
        this.setState({value: this.state.value + delta});
    }
    
    render(){
        return(
            /**
             * a props foi preenchida no index, quando o componente foi 
             * chamado : <ClassComponent value='Componente Classe' />
             */
            <h1>{this.props.value}</h1>
        )//return
    }//render
}