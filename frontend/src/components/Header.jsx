import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import { Button, ButtonGroup } from '@mui/material'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Header = () =>
{
	const navigate = useNavigate();



	return (
		<AppBar sx={{ minHeight: "64px", maxHeight: "64px" }}>
			<Toolbar sx={{ minHeight: "64px", maxHeight: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
				<Typography variant='h3'><Link style={{ color: "white" }} to="/">Quiz Wiz</Link></Typography>
				<ButtonGroup>
					<Button onClick={() => navigate("/login")} variant='contained'>Login</Button>
					<Button onClick={() => navigate("/register")} variant='contained'>Register</Button>
				</ButtonGroup>
			</Toolbar>
		</AppBar>
	)
}

export default Header
