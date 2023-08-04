import React from 'react'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

function Header() {
  return (
    <nav>
        <h1>Rajan</h1>
        <main>
            <Link to={"/"}>Home</Link>
            <HashLink to={"/contact"}>Contacts</HashLink>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <HashLink to={"/services"}>Services</HashLink>
        </main>
    </nav>
  )
}

export default Header
