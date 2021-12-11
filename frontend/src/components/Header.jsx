import React from 'react'
import { AppBar, Toolbar, ButtonGroup, Button } from '@mui/material'

const Header = () =>
{
	return (

		<AppBar color='info' sx={{ minHeight: "64px" }}>
			<Toolbar sx={{ justifyContent: "flex-end" }}>
				<ButtonGroup>
					<Button variant="contained" color="primary">Login</Button>
					<Button variant="contained" color="primary">Register</Button>
				</ButtonGroup>
			</Toolbar>
		</AppBar>

	)
}

export default Header
