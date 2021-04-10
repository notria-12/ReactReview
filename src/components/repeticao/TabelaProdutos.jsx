import React from 'react'
import produtos from '../../data/produtos'

export default props => {
    const tableBody =
        produtos.map((produto, i) => {
            return <tbody>
                <tr key={i}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                </tr>
            </tbody>
        })

    return (
        <div>
            <table>
                <thead>
                    <th>ID</th>
                    <th>NOME</th>
                    <th>PRECO</th>
                </thead>
                {
                    tableBody
                }
            </table>
        </div>
    )
}