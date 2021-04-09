import React, {  Component} from "react";

const TableHeader = () => {
 return (
			<thead>
			<tr>
					<th>Nome</th>
					<th>Trabalho</th>
					<th>Remover</th>
			</tr>
			</thead>
 )
}


const TableBody = (props) => {
	const rows = props.characterData.map((row, index) => {
		return (
			<tr key={index}>
				<td>{row.name}</td>
				<td>{row.job}</td>
				<td>
					<button onClick={() => props.removeCharacter(index)}>Deletar</button>
				</td>
			</tr>
		)
	})

	return <tbody>{rows}</tbody>
}

const  Table = (props) => {
    
		const {characterData, removeCharacter} = props
		
        return (
            <table>
               <TableHeader/>
			   <TableBody characterData={characterData} removeCharacter={removeCharacter}/>              
                
            </table>
        )
    
}

export default Table;