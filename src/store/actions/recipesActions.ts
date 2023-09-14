import { Dispatch } from 'redux';
import { setRecipes, Recipe } from '../reducers/recipesReducers';

export const setRecipesAction = (recipes: Recipe[]) => (dispatch: Dispatch) => {
	dispatch(setRecipes(recipes));
};
