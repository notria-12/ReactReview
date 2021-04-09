import React from 'react'


const NumberRandom = (props) => {

    const res = parseInt(Math.random() * (props.max - props.min) + props.min)

    return (
        <>
            <label htmlFor="startNumber">Numéro inicial: {props.min}</label>

            <label htmlFor="endNumber" >Número final: {props.max}</label>
            <label htmlFor="endNumber" >Resultado: {res}</label>
            

        </>
    );
}

export default NumberRandom;