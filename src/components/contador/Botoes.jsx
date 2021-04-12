import React from 'react'

export default props => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>

            <button onClick={props.incrementar}>Incrementar</button>
            <button onClick={props.decrementar}>Incrementar</button>
        </div>
    )
}