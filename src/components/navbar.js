import React from "react"
import Button from "./button"

const Navbar = () => (
  <div>
    <Button name="Inicio" url="/"/>
    <br/>
    <Button name="Page 2" url="/page-2"/>
    <br/>
    <Button name="Band" url="/band"/>
    <br/>
    <Button name="Blog" url="/blog"/>
  </div>
)

export default Navbar