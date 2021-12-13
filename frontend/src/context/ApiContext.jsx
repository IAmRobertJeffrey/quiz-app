import React, { useState } from 'react'
import { createContext, useEffect } from 'react'

const ApiContext = createContext({})

export const ApiProvidor = ({ children }) =>
{
	const [categories, setCategories] = useState([]);
	const [difficulties, setDifficulties] = useState(["easy", "medium", "hard"])
	const [selectedDifficulty, setSelectedDifficulty] = useState('')
	const [selectedCategory, setSelectedCategory] = useState('')
	const [currentQuizQuestions, setCurrentQuizQuestions] = useState([])

	async function getCategories()
	{
		const response = await fetch("https://opentdb.com/api_category.php")
		const data = await response.json();
		setCategories(data.trivia_categories)

	}

	async function getQuiz()
	{
		console.log(`https://opentdb.com/api.php?amount=10&category=${selectedCategory}&difficulty=${selectedDifficulty}&type=multiple`);

		const response = await fetch(`https://opentdb.com/api.php?amount=10&category=${selectedCategory}&difficulty=${selectedDifficulty}&type=multiple`)
		const data = await response.json()
		setCurrentQuizQuestions(data)

	}



	return (
		<ApiContext.Provider value={{
			getCategories,
			categories,
			difficulties,
			selectedDifficulty,
			setSelectedDifficulty,
			selectedCategory,
			setSelectedCategory,
			getQuiz


		}}>
			{children}
		</ApiContext.Provider>
	)
}

export default ApiContext
