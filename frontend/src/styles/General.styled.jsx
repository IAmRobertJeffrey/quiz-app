import { styled } from '@mui/system'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'


export const PageWrapper = styled(Container)({
	width: "100%",

	minHeight: "100%",
	minWidth: "100%",
	maxWidth: "100%",
	paddingLeft: "0px !important",
	paddingRight: "0px !important",
	paddingTop: "64px !important",
	boxSizing: "border-box !important",
	backgroundImage: "url(./img/wave.svg)",
	backgroundRepeat: "no-repeat",
	backgroundSize: "550vh",
	backgroundPositionX: "center",
	zIndex: "0 !important",
})

export const QuizWhiz = styled(Link)({
	color: "white",
	textDecorationColor: "white",

})

