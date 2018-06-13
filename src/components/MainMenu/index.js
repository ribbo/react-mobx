import React from 'react'
import { Link } from 'react-router-dom'

const MainMenu = () => (
    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/account'>Account</Link></li>
            <li><Link to='/layouts'>Layouts</Link></li>
        </ul>
    </nav>
)

export default MainMenu
