import React, { useState } from 'react'

export default (props) => {

    let [qtdNumero, setQtd] = useState(0)
    let numerosIniciais = Array(qtdNumero).fill(0)
    let [numeros, setNumeros] = useState(numerosIniciais)

    const setQtdNumeros = (e) => {
        setQtd(e.target.value)
    }

    const geraNumeros = () => {
        numeros = []
        for (let i = 0; i < qtdNumero; i++) {
            let numero = parseInt(Math.random() * (60 - 1)) + 1

            while (numeros.indexOf(numero) >= 0) {
                numero = parseInt(Math.random() * (60 - 1)) + 1
            }
            console.log(numero)
            numeros.push(numero)
            // console.log([...numeros, numero])
            // setNumeros([...numeros, numero])
        }
        console.log("NUMEROS", numeros)
        // setNumeros([])
    }

    return (
        <div>
            <h3>MegaSena</h3>
            <p>Quantos Numeros gerar?</p>
            <div style={{ display: 'flex' }}>
                <input type="number" id="inputMega" value={qtdNumero} onChange={setQtdNumeros} />
                <button onClick={ _ =>
                    geraNumeros
                }>Gerar</button>
            </div>
           <div>
               h 
           {
                console.log("Numeros2", numeros)
                // numeros.map((numero, i) =>
                //     <p key={i}>{numero} </p>)
            }
           </div>


        </div>
    )
}