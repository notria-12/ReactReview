import React, { Component } from 'react'
import Botoes from './Botoes'
import './Contador.css'
import Display from './Display'
import PassoForm from './PassoForm'

class Contador extends Component {
    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 4
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (evento) => {
        this.setState({
            passo: +evento.target.value
        })
    }



    render() {
        return (
            <div className="contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
                <Botoes incrementar={this.inc} decrementar={this.dec}></Botoes>
               
            </div>
        )
    }
}

export default Contador