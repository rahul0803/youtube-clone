import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../utils/Constants'
import SearchBar from './SearchBar'


const Navbar = () => {
    return (
        <Stack 
        direction='row' 
        alignItems='center' 
        p={2} 
        sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}>

        <Link to='/' style={{display: 'flex', alignItems: 'center' }}>
        <img src={logo} alt='logo' height={45} />
        </Link>
        <SearchBar />

        </Stack>
    )
}

export default Navbar



//// With 'sx' we can provide any style to our material ui components (it's a prop)
//// Stack is a container component for arranging elements horizontally or vertically (it's mainly a wrapper)...it manages the layout of its immediate childern
