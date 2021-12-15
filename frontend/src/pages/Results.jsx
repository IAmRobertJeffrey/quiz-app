import React from 'react'
import { PageWrapper } from '../styles/General.styled'
import { useContext } from 'react'
import QuizContext from '../context/QuizContext'
import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'

const Results = () =>
{
	const { currentQuizQuestion, setCurrentQuizQuestion, questionNumber, setQuestionNumber, score, setScore } = useContext(QuizContext)


	return (
		<PageWrapper sx={{ display: "flex", alignItems: "center", justifyContent: "center", }}>
			<Paper sx={{ width: "fit-content", outline: "2px solid white", backgroundColor: "#2384df", color: "white", padding: "4rem" }}>
				<Typography variant="h1" textAlign="center"> Correct Answers: {score}</Typography>
				<Typography variant="h1" textAlign="center"> You {score > 5 ? "Passed 🎉" : "Failed 😭"}</Typography>
			</Paper>
		</PageWrapper>
	)
}

export default Results
