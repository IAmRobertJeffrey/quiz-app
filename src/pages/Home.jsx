import React from 'react'
import { useEffect } from 'react'
import { PageWrapper } from '../styles/General.styled'
import { useContext } from 'react'
import ApiContext from '../context/ApiContext'
import { Button, Container, Typography } from '@mui/material'
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

		// eslint-disable-next-line react-hooks/exhaustive-deps
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
		<PageWrapper sx={{



		}}>
			<Container sx={{ zIndex: "2 !important", py: "50px !important", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>

				<Box sx={{

					display: "flex", flexDirection: "column", width: "500px", gridGap: "4rem", boxSizing: "border-box",
					padding: "4rem",
					borderRadius: "0.5rem",
					boxShadow: `
						1.4px 1.4px 3.1px rgba(0, 0, 0, 0.09),
						3.3px 3.4px 7.4px rgba(0, 0, 0, 0.065),
						6.3px 6.4px 14px rgba(0, 0, 0, 0.054),
						11.2px 11.4px 25px rgba(0, 0, 0, 0.045),
						20.9px 21.3px 46.8px rgba(0, 0, 0, 0.036),
						50px 51px 112px rgba(0, 0, 0, 0.025)
						`,
					zIndex: "3 !important",
					backgroundColor: "white",
				}}>

					<Typography variant="h2" textAlign="center">Pick a quiz.</Typography>
					<Box sx={{ gridGap: "2rem", display: "flex", flexDirection: "column", justifySelf: "flex-start" }}>
						<CategoryPicker />
						<DifficultyPicker />
					</Box>
					<Button onClick={handleStartQuiz} variant="contained">Start Quiz</Button>
				</Box>
			</Container>

		</PageWrapper>
	)
}

export default Home
