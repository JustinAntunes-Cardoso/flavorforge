import { NavBarProps } from '../types/types';

export const routes = {
  home: '/',
  input: '/input',
  recipeList: '/recipelist',
  recipe: '/recipe',
};

export const linkData: NavBarProps = {
  links: [
    { link: routes.home, label: 'Home' },
    { link: routes.input, label: 'Create' },
    { link: routes.recipeList, label: 'Recipes' },
    { link: routes.recipe, label: 'History' },
  ],
};

export const hrefs = {
  github: 'https://github.com/JustinAntunes-Cardoso/flavorforge',
  linkedIn: 'https://www.linkedin.com/in/justinantunescardoso/',
  portfolio: 'https://justinantunescardoso.com/',
};
