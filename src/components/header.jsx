import React from 'react'
import LogoBlueShift from '../assets/LogoBlueShift.png'

const Header = () => {
  return (
    <header>
        <div>
            <img src={LogoBlueShift} alt="Logo BlueShift" />
            <nav>
                <li>Home</li>
                <li>Sobre</li>
                <li>Contato</li>
            </nav>
        </div>
    </header>
  )
}

export default Header