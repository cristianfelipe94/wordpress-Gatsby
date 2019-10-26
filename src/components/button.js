import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  border-radius: 5px;
  text-decoration: none;
  color: black;
  background-color: deeppink;
  text-align: center;
  padding: 10px;
  margin: 10px 0;
  display: inline-block;
`

const Button = (props) => (
  <StyledLink to={props.url} activeStyle={{color: 'black'}}>
    {props.name}
  </StyledLink>
)

export default Button;