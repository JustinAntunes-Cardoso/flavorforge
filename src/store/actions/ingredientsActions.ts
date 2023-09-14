import { Dispatch } from 'redux';
import {
	addIngredient,
	removeIngredient,
} from '../reducers/ingredientsReducers';

export const addIngredientAction =
	(ingredient: string) => (dispatch: Dispatch) => {
		dispatch(addIngredient(ingredient));
	};

export const removeIngredientAction =
	(ingredient: string) => (dispatch: Dispatch) => {
		dispatch(removeIngredient(ingredient));
	};
