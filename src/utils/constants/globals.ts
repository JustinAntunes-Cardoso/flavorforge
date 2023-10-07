import { HeaderSearchProps } from '../types/types';

export const routes = {
  home: '/',
  input: '/input',
  recipeList: '/recipelist',
  recipe: '/recipe',
};

export const headerData: HeaderSearchProps = {
  links: [
    { link: routes.home, label: 'Home' },
    { link: routes.input, label: 'Create' },
    { link: routes.recipeList, label: 'Recipes' },
    { link: routes.recipe, label: 'History' },
  ],
};

export const hrefs = {
  github: 'https://github.com/JustinAntunes-Cardoso/flavorforge',
};
