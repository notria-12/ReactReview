import React, { Component } from 'react'

import Button from './Button'
import './Calculator.css'
import Display from './Display'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = { ...initialState }

    clearMemory() {
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        const values = [...this.state.values]
        
        if (this.state.current === 0) {
            this.setState({ current: 1, clearDisplay: true, operation })
        }

        if (this.state.operation !== null && operation === '=' && values[0] !== 0 && values[1] !== 0) {
            let result = null;
            switch (this.state.operation) {
                case '+':
                    result = values[0] + values[1]
                    break;
                case '-':
                    result = values[0] - values[1]
                    break;
                case '/':
                    result = values[0] / values[1]
                    break;
                case '*':
                    result = values[0] * values[1]
                    break;
                default:
                    break;
            }

            this.setState({displayValue: result})
        }



    }

    addDigit(n) {
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
            console.log(values)
        }



    }

    render() {
        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)
        return (
            <div className="calculator">
                <Display value={this.state.displayValue}></Display>
                <Button label="AC" click={() => this.clearMemory()} triple></Button>
                <Button label="/" click={setOperation} operation></Button>
                <Button label="7" click={addDigit}></Button>
                <Button label="8" click={addDigit}></Button>
                <Button label="9" click={addDigit}></Button>
                <Button label="*" click={setOperation} operation></Button>
                <Button label="4" click={addDigit}></Button>
                <Button label="5" click={addDigit}></Button>
                <Button label="6" click={addDigit}></Button>
                <Button label="-" click={setOperation} operation></Button>
                <Button label="1" click={addDigit}></Button>
                <Button label="2" click={addDigit}></Button>
                <Button label="3" click={addDigit}></Button>
                <Button label="+" click={setOperation} operation></Button>
                <Button label="0" click={addDigit} double></Button>
                <Button label="." click={addDigit}></Button>
                <Button label="=" click={setOperation} operation></Button>
            </div>
        )
    }

}