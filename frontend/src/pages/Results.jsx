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
			<Typography variant="h1" textAlign="center">{score} correct answers!</Typography>
		</PageWrapper>
	)
}

export default Results
