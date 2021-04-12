import React from 'react'

export default props => {

    return (
        <div>
            <label htmlFor="passoInput">Passo</label>
            <input type="number" id="passoInput" value={props.passo} onChange={props.setPasso} />
        </div>
    )
}