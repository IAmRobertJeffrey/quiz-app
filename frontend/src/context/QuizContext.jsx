import React, { useContext, useState } from 'react'
import { createContext } from 'react'
import ApiContext from './ApiContext'
import { useRef } from 'react'
const QuizContext = createContext({})

export const QuizProvidor = ({ children }) =>
{

	const [score, setScore] = useState(0)
	const [currentQuizQuestion, setCurrentQuizQuestion] = useState('')
	const [questionNumber, setQuestionNumber] = useState(0)
	const [time, setTime] = useState(0);

	return (
		<QuizContext.Provider value={{

			currentQuizQuestion,
			setCurrentQuizQuestion,
			questionNumber,
			setQuestionNumber,
			score,
			setScore,
			time,
			setTime,



		}}>
			{children}
		</QuizContext.Provider>
	)
}

export default QuizContext
