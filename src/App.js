import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
import NumberRandom from './components/NumberRandom'
import Card from './components/layout/Card'
import './App.css'
import Familia from './components/Familia'
import FamiliaMembro from './components/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import Contador from './components/contador/Contador'
import Mega from './components/megasena/Mega'
import Calculator from './components/calculadora/Calculator'
import Menu from './components/menu/Menu'
import Conteudo from './components/conteudo/Conteudo'

import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {


    render() {

        return (
            <div className="main">
                <Router>
                    <Menu></Menu>
                    <Conteudo></Conteudo>
                </Router>
            </div>
        )
    }
}


export default App