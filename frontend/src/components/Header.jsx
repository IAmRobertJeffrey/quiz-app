import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import { Button, ButtonGroup } from '@mui/material'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { QuizWhiz } from '../styles/General.styled'

const Header = () =>
{
	const navigate = useNavigate();



	return (
		<AppBar color='transparent' sx={{ minHeight: "64px", maxHeight: "64px", boxShadow: "none" }}>
			<Toolbar sx={{ minHeight: "64px", maxHeight: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
				<Typography variant='h3'><QuizWhiz to="/">Quiz Wiz</QuizWhiz></Typography>
				{/* <ButtonGroup>
					<Button onClick={() => navigate("/login")} variant='contained' color='info'>Login</Button>
					<Button onClick={() => navigate("/register")} variant='contained' color='info'>Register</Button>
				</ButtonGroup> */}
			</Toolbar>
		</AppBar>
	)
}

export default Header
