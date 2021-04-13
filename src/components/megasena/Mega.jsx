import React, { useState } from 'react'

export default (props) => {

    let [qtdNumero, setQtd] = useState(0)
    let numerosIniciais = Array(qtdNumero).fill(0)
    let [numeros, setNumeros] = useState(numerosIniciais)

    let setQtdNumeros = (e) => {
        setQtd(e.target.value)
    }

   function gerarNumeroDiferente (min, max, array) {
        const nAleatorio = parseInt(Math.random() * (max - min)) + min;

        return array.includes(nAleatorio) ? gerarNumeroDiferente : nAleatorio
    }

    function gerarNumeros (qtde) {
        console.log('qtde', qtde)
        let numeros = []
        for(let i = 0; i < qtde; i++){
            numeros.push(gerarNumeroDiferente(1,60, numeros) + ' ')
        }

        console.log(numeros)
        setNumeros(numeros.sort((n1,n2) => n1 - n2) )
    }


    return (
        <div>
            <h3>MegaSena</h3>
            <p>Quantos Numeros gerar?</p>
            <div style={{ display: 'flex' }}>
                <input type="number" id="inputMega" value={qtdNumero} onChange={setQtdNumeros} />
                <button onClick={_ => gerarNumeros(qtdNumero)}>Gerar</button>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <h3>{numeros}</h3>
            </div>


        </div>
    )
}