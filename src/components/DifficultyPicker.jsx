import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useContext } from 'react'
import ApiContext from '../context/ApiContext'

const DifficultyPicker = () =>
{
	const { difficulties, selectedDifficulty, setSelectedDifficulty } = useContext(ApiContext)
	return (
		<FormControl fullWidth >
			<InputLabel id="demo-simple-select-label">Quiz Difficulty</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				value={selectedDifficulty}
				label="Quiz Difficulty"
				onChange={(e) => setSelectedDifficulty(e.target.value)}
			>
				{difficulties.map((difficulty) => (
					<MenuItem key={difficulty} value={difficulty}>{difficulty[0].toUpperCase()}{difficulty.slice(1, difficulty.length)}</MenuItem>
				))}


			</Select>
		</FormControl>
	)
}

export default DifficultyPicker
