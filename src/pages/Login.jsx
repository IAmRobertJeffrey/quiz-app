import React from 'react'
import { PageWrapper } from '../styles/General.styled'
import { Auth, AuthWrapper } from '../styles/Auth.styled'
import { TextField, Typography, Button } from '@mui/material'


const Login = () =>
{
	return (
		<PageWrapper>
			<AuthWrapper >
				<Auth>
					<Typography textAlign="center" variant="h4">Login</Typography>
					<div style={{ width: "100%", flexGrow: "1", display: "flex", flexDirection: "column", gap: "2rem", justifyContent: "center" }}>
						<TextField required label="Username" variant="outlined" />
						<TextField required label="Password" variant="outlined" />
					</div>
					<Button variant="contained">Login</Button>

				</Auth>

			</AuthWrapper>
		</PageWrapper>
	)
}

export default Login
