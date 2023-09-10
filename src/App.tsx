import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Home from './pages/Home';
import Input from './pages/Input';
import RecipeList from './pages/RecipeList';
import Recipe from './pages/Recipe';
import NotFound from './pages/NotFound';
import GlobalFonts from './utils/constants/GlobalFonts';
import { routes } from './utils/constants/globals';
import './App.scss'

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colors: {
          brand: ['#E65100', '#EF6C00', '#F57C00', '#FB8C00', '#FF9800', '#FFA726', '#FFB74D', '#FFE082', '#FFECB3'],
          secondary: ['#33691E', '#558B2F', '#689F38', '#7CB342', '#8BC34A', '#9CCC65', '#AED581', '#E6EE9C', '#DCEDC8'],
          accents: ['#F57F17', '#F9A825', '#FBC02D', '#FBC02D', '#FFEB3B', '#FFEE58', '#FFEE58', '#FFF59D', '#FFF9C4'],
        },
        primaryColor: 'brand',
        fontFamily: 'Greycliff CF, sans-serif',
      }}>
      <GlobalFonts />
      <Router>
        <Routes>
          <Route path={routes.home} Component={Home} />
          <Route path={routes.input} Component={Input} />
          <Route path={routes.recipeList} Component={RecipeList} />
          <Route path={routes.recipe} Component={Recipe} />
          <Route path='*' Component={NotFound} />
        </Routes>
      </Router>
    </MantineProvider>
  );
}

export default App;
