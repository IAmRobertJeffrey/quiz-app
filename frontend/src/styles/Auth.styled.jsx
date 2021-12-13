import { styled } from '@mui/system'
import { PageWrapper } from './General.styled'
import { Box } from '@mui/system'

export const AuthWrapper = styled(PageWrapper)({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	paddingTop: "0px !important"

})

export const Auth = styled(Box)({

	display: "flex",
	flexDirection: "column",
	width: "500px",
	height: "500px",
	boxSizing: "border-box",

	borderRadius: "0.5rem",
	boxShadow: `
  1.4px 1.4px 3.1px rgba(0, 0, 0, 0.09),
  3.3px 3.4px 7.4px rgba(0, 0, 0, 0.065),
  6.3px 6.4px 14px rgba(0, 0, 0, 0.054),
  11.2px 11.4px 25px rgba(0, 0, 0, 0.045),
  20.9px 21.3px 46.8px rgba(0, 0, 0, 0.036),
  50px 51px 112px rgba(0, 0, 0, 0.025)
`,

	padding: "4rem"

})

