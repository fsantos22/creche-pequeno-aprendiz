"use client"

import React from "react"
import { Nav, NavLink, NavIcon, Bars } from "./styles"

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink href="">C.E. Pequeno Aprendiz</NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  )
}

export default Navbar
