import React from 'react'
import { createContext, useState, } from 'react'

const QuizContext = createContext({})

export const QuizProvidor = ({ children }) =>
{




	return (
		<QuizContext.Provider value={{


		}}>
			{children}
		</QuizContext.Provider>
	)
}

export default QuizContext
