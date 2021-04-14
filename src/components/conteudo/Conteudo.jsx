import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Form from '../../Form';
import Table from '../../Table';
import Calculator from '../calculadora/Calculator';
import ParOuImpar from '../condicional/ParOuImpar';
import Contador from '../contador/Contador';
import Familia from '../Familia';
import FamiliaMembro from '../FamiliaMembro';
import Card from '../layout/Card';
import Mega from '../megasena/Mega';
import NumberRandom from '../NumberRandom';
import ListaAlunos from '../repeticao/ListaAlunos';
import TabelaProdutos from '../repeticao/TabelaProdutos';
import './Conteudo.css'

class Conteudo extends Component {
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

            <main className='conteudo'>
                <Switch>
                    <Route exact path='/'>
                        <Card titulo="#01 Exemplo Número Aleatório" color="#080">
                            <NumberRandom max={20} min={1}></NumberRandom>
                        </Card>
                    </Route>
                    <Route exact path='/form'>
                        <Card titulo="#02 Exemplo formulário">
                            <Table characterData={characters} removeCharacter={this.removeCharacter} />
                            <Form handleSubmit={this.handleSubmit}></Form>
                        </Card>
                    </Route>
                    <Route exact path='/family'>
                        <Card titulo="#03 Elementos FIlhos">
                            <Familia sobrenome="Sousa">
                                <FamiliaMembro nome="Airton" ></FamiliaMembro>
                                <FamiliaMembro nome="Ailane" ></FamiliaMembro>
                                <FamiliaMembro nome="Iraneide" ></FamiliaMembro>
                            </Familia>

                        </Card>
                    </Route>
                    <Route exact path='/alunos'>
                        <Card titulo="#04 Repetição alunos">
                            <ListaAlunos></ListaAlunos>

                        </Card>
                    </Route>
                    <Route exact path='/produtos'>
                        <Card titulo="#05 Repetição produtos" color="#D2691E">
                            <TabelaProdutos></TabelaProdutos>

                        </Card>
                    </Route>
                    <Route exact path='/condicional'>
                        <Card titulo="#06 Condicional" color="#8B4513">
                            <ParOuImpar numero={3}></ParOuImpar>
                        </Card>

                    </Route>
                    <Route exact path='/contador'>
                        <Card titulo="#07 Contador" color="#8B4513">
                            <Contador numeroInicial={23}></Contador>
                        </Card>
                    </Route>
                    <Route exact path='/mega'>
                    <Card titulo="#08 MegaSena" color="	#9ACD32">
                         <Mega></Mega>
                    </Card>
                    </Route>
                    <Route exact path='/calculator'>
                    <Card titulo="#09 Calculadora" color="#8B4513" >
                         <Calculator></Calculator>
                    </Card>
                    </Route>


                </Switch>
            </main>
        )
    }
}

export default Conteudo;