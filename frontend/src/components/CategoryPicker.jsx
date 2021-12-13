import React from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { useContext } from 'react'
import ApiContext from '../context/ApiContext'

const CategoryPicker = () =>
{
	const { getCategories, categories, selectedCategory, setSelectedCategory } = useContext(ApiContext)
	return (
		<FormControl fullWidth >
			<InputLabel id="demo-simple-select-label">Quiz Category</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				value={selectedCategory}
				label="Quiz Category"
				onChange={(e) => setSelectedCategory(e.target.value)}
			>
				{categories.map((category) => (
					<MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
				))}


			</Select>
		</FormControl>
	)
}

export default CategoryPicker
