import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
import NumberRandom from './components/NumberRandom'
import Card from './components/layout/Card'

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
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit}></Form>
                <NumberRandom max={20} min={1}></NumberRandom>

                <Card titulo="Exemplo de Card" conteudo="Coneteúdo"></Card>
            </div>
        )
    }
}


export default App