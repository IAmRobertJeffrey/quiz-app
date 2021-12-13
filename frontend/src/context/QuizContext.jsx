import React, { useState } from 'react'
import { createContext, useEffect } from 'react'

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
