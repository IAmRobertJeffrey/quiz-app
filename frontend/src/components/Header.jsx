import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import { Button, ButtonGroup } from '@mui/material'

const Header = () =>
{
	return (
		<AppBar sx={{ minHeight: "64px" }}>
			<Toolbar sx={{ minHeight: "64px" }}>
				<ButtonGroup>
					<Button variant='contained'>Login</Button>
					<Button variant='contained'>Register</Button>
				</ButtonGroup>
			</Toolbar>
		</AppBar>
	)
}

export default Header
