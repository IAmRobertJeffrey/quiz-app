import React from 'react'
import { useEffect } from 'react'
import { PageWrapper } from '../styles/General.styled'
import { useContext } from 'react'
import ApiContext from '../context/ApiContext'
import { Button, Container } from '@mui/material'
import { Box } from '@mui/system'
import DifficultyPicker from '../components/DifficultyPicker'

import CategoryPicker from '../components/CategoryPicker'

const Home = () =>
{
	const { getCategories, categories, selectedDifficulty, setSelectedDifficulty, getQuiz } = useContext(ApiContext)

	useEffect(() =>
	{
		getCategories();
	}, [])

	return (
		<PageWrapper>
			<Container sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%" }}>

				<Box sx={{ display: "flex", flexDirection: "column", width: "50%", gridGap: "4rem" }}>
					<CategoryPicker />
					<DifficultyPicker />
					<Button onClick={getQuiz} variant="contained">Start Quiz</Button>
				</Box>
			</Container>

		</PageWrapper>
	)
}

export default Home
