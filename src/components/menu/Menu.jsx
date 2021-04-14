import React from 'react'
import { Link } from 'react-router-dom';
import './Menu.css'

const Menu = props =>{
    return(
        <aside className="menu">
            <nav>
                <ul>
                    <li>
                        <Link to="/">01 Número Aleatório</Link>
                    </li>
                    <li>
                        <Link to="/form">02 Formulário</Link>
                    </li>
                    <li>
                        <Link to="/family">03 Comp. Filhos</Link>
                    </li>
                    <li>
                        <Link to="/alunos">04 Repetição 01</Link>
                    </li>
                    <li>
                        <Link to="/produtos">05 Repetição 02</Link>
                    </li>
                    <li>
                        <Link to="/condicional">06 Condicional</Link>
                    </li>
                    <li>
                        <Link to="/contador">07 Contador</Link>
                    </li>
                    <li>
                        <Link to="/mega">08 Mega Sena</Link>
                    </li>
                    <li>
                        <Link to="/calculator">09 Calculadora</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Menu;