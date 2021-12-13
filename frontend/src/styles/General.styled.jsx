import { styled } from '@mui/system'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'


export const PageWrapper = styled(Container)({
	width: "100%",
	height: "100%",
	minWidth: "100%",
	maxWidth: "100%",
	paddingLeft: "0px !important",
	paddingRight: "0px !important",
	paddingTop: "64px !important",
})

export const QuizWhiz = styled(Link)({
	color: "white",
	textDecorationColor: "white",

})

