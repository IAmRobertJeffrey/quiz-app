import React from 'react'
import { PageWrapper } from '../styles/General.styled'
import { useContext } from 'react'
import QuizContext from '../context/QuizContext'
import { Typography } from '@mui/material'

const Results = () =>
{
	const { currentQuizQuestion, setCurrentQuizQuestion, questionNumber, setQuestionNumber, score, setScore } = useContext(QuizContext)


	return (
		<PageWrapper>
			<Typography variant="h1" textAlign="center"> correct answers: {score}</Typography>
			<Typography variant="h1" textAlign="center"> You {score > 5 ? "Passed" : "Failed"}</Typography>
		</PageWrapper>
	)
}

export default Results
