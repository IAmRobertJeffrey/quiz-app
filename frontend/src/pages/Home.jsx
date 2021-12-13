import React from 'react'
import { useEffect } from 'react'
import { PageWrapper } from '../styles/General.styled'
import { useContext } from 'react'
import ApiContext from '../context/ApiContext'
import { Button, Container } from '@mui/material'
import { Box } from '@mui/system'
import DifficultyPicker from '../components/DifficultyPicker'

import CategoryPicker from '../components/CategoryPicker'
import { useNavigate } from 'react-router-dom'
import QuizContext from '../context/QuizContext'

const Home = () =>
{
	const { getCategories, selectedDifficulty, selectedCategory, getQuiz, setCurrentQuizQuestions } = useContext(ApiContext)
	const { setScore, setQuestionNumber, setCurrentQuizQuestion } = useContext(QuizContext)
	const navigate = useNavigate()
	useEffect(() =>
	{
		getCategories();
		setScore(0);
		setQuestionNumber(0);
		setCurrentQuizQuestion('')
		setCurrentQuizQuestions([])
		console.log("got categories");

	}, [])

	function handleStartQuiz()
	{
		if (selectedDifficulty && selectedCategory)
		{
			getQuiz()
			navigate("/quiz")
		}
	}

	return (
		<PageWrapper>
			<Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>

				<Box sx={{ display: "flex", flexDirection: "column", width: "50%", gridGap: "4rem" }}>
					<CategoryPicker />
					<DifficultyPicker />
					<Button onClick={handleStartQuiz} variant="contained">Start Quiz</Button>
				</Box>
			</Container>

		</PageWrapper>
	)
}

export default Home
