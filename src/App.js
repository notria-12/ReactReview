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

class App extends Component {
    state = {
        characters: [],
        startNumber: 0,
        endNumber: 0
    }

    removeCharacter = (index) => {
        const { characters } = this.state;

        this.setState(
            {
                characters: characters.filter((character, i) => i !== index)
            }
        )
    }

    handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character] })
    }

    render() {
        const { characters } = this.state;

        return (
            <div className="container">

                <div className="cards">
                    <Card titulo="#01 Exemplo Número Aleatório" color="#080">
                        <NumberRandom max={20} min={1}></NumberRandom>
                    </Card>

                    <Card titulo="#02 Exemplo formulário">
                        <Table characterData={characters} removeCharacter={this.removeCharacter} />
                        <Form handleSubmit={this.handleSubmit}></Form>
                    </Card>

                    <Card titulo="#03 Elementos FIlhos">
                        <Familia sobrenome="Sousa">
                            <FamiliaMembro nome="Airton" ></FamiliaMembro>
                            <FamiliaMembro nome="Ailane" ></FamiliaMembro>
                            <FamiliaMembro nome="Iraneide" ></FamiliaMembro>
                        </Familia>

                    </Card>

                    <Card titulo="#04 Repetição alunos">
                        <ListaAlunos></ListaAlunos>

                    </Card>
                    <Card titulo="#05 Repetição produtos" color="#D2691E">
                        <TabelaProdutos></TabelaProdutos>

                    </Card>

                    <Card titulo="#06 Condicional" color="#8B4513">
                        <ParOuImpar numero={3}></ParOuImpar>
                    </Card>

                    <Card titulo="#07 Contador" color="#8B4513">
                         <Contador numeroInicial={23}></Contador>
                    </Card>
                   
                    <Card titulo="#07 MegaSena" color="	#9ACD32">
                         <Mega></Mega>
                    </Card>
                </div>
            </div>
        )
    }
}


export default App