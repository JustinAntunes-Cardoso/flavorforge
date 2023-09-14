import { combineReducers } from 'redux';
import ingredientsReducer from './ingredientsReducers';
import recipesReducer from './recipesReducers';

const rootReducer = combineReducers({
	ingredients: ingredientsReducer,
	recipes: recipesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
