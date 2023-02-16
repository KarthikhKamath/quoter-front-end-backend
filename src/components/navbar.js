import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styled from '@emotion/styled';
import {Link} from "react-router-dom"

const Header = styled(AppBar)`
    background: #111111  `;

const Tabs = styled(Link)`
    font-size:20px;
    margin:20px;
    text-decoration : none;
    color:white;
`

function NavBar() {
  return (
    <Header position='static'>
        <Toolbar>
        <Tabs to='/'>Home</Tabs>
        <Tabs to='/all'>Quotes</Tabs>
        <Tabs to='/adduser'>Add</Tabs>
        </Toolbar>
    </Header>
  )
}

export default NavBar