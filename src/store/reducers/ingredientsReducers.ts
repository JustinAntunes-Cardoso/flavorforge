import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const ingredientsSlice = createSlice({
	name: 'ingredients',
	initialState: [] as string[],
	reducers: {
		addIngredient: (state, action: PayloadAction<string>) => {
			return [...state, action.payload];
		},
		removeIngredient: (state, action: PayloadAction<string>) => {
			return state.filter((ingredient) => ingredient !== action.payload);
		},
	},
});

export const { addIngredient, removeIngredient } = ingredientsSlice.actions;
export default ingredientsSlice.reducer;
