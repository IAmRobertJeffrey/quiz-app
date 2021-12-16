import React, { useRef } from 'react'
import { PageWrapper } from '../styles/General.styled'
import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ApiContext from '../context/ApiContext'
import QuizContext from '../context/QuizContext'
import { Container, Grid, Typography } from '@mui/material'
import { Button } from '@mui/material'
import he from 'he'
import { red, teal } from '@mui/material/colors'

const Quiz = () =>
{
	const { selectedDifficulty, selectedCategory, currentQuizQuestions } = useContext(ApiContext)
	const { currentQuizQuestion, setCurrentQuizQuestion, questionNumber, setQuestionNumber, score, setScore, time, setTime } = useContext(QuizContext)
	let wrongAnwers = useRef();
	let correctAnswer = useRef();
	let answers = useRef([]);

	const navigate = useNavigate()


	function handleAnswer(answer)
	{

		if (answer === correctAnswer.current)
		{
			console.log("CORRECT!");
			setScore(score + 1)
		}
		console.log(questionNumber)
		console.log(currentQuizQuestions.results.length);
		if (questionNumber < currentQuizQuestions.results.length - 1)
		{

			setQuestionNumber(questionNumber + 1)
		}
		else
		{
			navigate("/results")
		}
	}

	function shuffleArray(array)
	{
		for (var i = array.length - 1; i > 0; i--)
		{
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
	}

	useEffect(() =>
	{
		if ((selectedCategory && selectedDifficulty))
		{
			if (currentQuizQuestions.results)
			{
				if (currentQuizQuestions.results.length > 0)
				{


					console.log(currentQuizQuestions.results);
					wrongAnwers.current = currentQuizQuestions.results[questionNumber].incorrect_answers
					correctAnswer.current = currentQuizQuestions.results[questionNumber].correct_answer
					answers.current = [...wrongAnwers.current, correctAnswer.current]
					shuffleArray(answers.current)
					console.log(answers.current);



					setCurrentQuizQuestion(he.decode(currentQuizQuestions.results[questionNumber].question))
					setInterval(() =>
					{
						setTime(time + 1)
					}, 1000)

				}
				else
				{
					navigate("/")
				}

			}
		}
		else
		{
			navigate("/");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentQuizQuestions, navigate, selectedCategory, selectedDifficulty, currentQuizQuestion, setCurrentQuizQuestion, questionNumber])


	return (


		<PageWrapper sx={{ alignItems: "center", justifyContent: "center", display: "flex" }}>
			<Container sx={{ py: "50px !important", minheight: "100%", height: "100%", gridGap: "100px", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>

				<Button disableRipple disableElevation color="info" variant="contained" sx={{ fontSize: "2rem", width: "80%", textAlign: "center", alignSelf: "center", border: "white solid 2px" }}>
					{currentQuizQuestion}
					{/* <Typography color="white" textAlign="center" variant="h2">{currentQuizQuestion}</Typography> */}
				</Button>

				<Grid spacing={2} sx={{ display: "flex" }} container>
					{
						answers.current.map((answer) => (
							<Grid xs={12} s={12} md={6} lg={6} key={answer} item>
								<Button sx={{ width: "100%", boxSizing: "border-box", fontSize: "1.25rem", height: "100%", minHeight: "100px" }} variant="contained" onClick={() => handleAnswer(answer)} >{he.decode(answer)}</Button>
							</Grid>
						))
					}
				</Grid>

			</Container>
		</PageWrapper>

	)
}

export default Quiz
