import { createSlice } from '@reduxjs/toolkit';

interface Recipe {
	title: string;
	image: string;
	ingredients: string;
	description: string;
}

const recipesSlice = createSlice({
	name: 'recipes',
	initialState: [],
	reducers: {
		setRecipes: (_, action) => {
			return action.payload;
		},
	},
});

export const { setRecipes } = recipesSlice.actions;
export type { Recipe };
export default recipesSlice.reducer;
