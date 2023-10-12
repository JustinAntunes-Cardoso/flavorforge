import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import Home from './pages/Home';
import Input from './pages/Input';
import RecipeList from './pages/RecipeList';
import Recipe from './pages/Recipe';
import NotFound from './pages/NotFound';
import { routes } from './utils/constants/globals';
import { globalTheme } from './utils/constants/theme';
// core styles are required for all packages
import '@mantine/core/styles.css';
import './App.scss'

function App() {
  return (
    <MantineProvider
      theme={globalTheme}>
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
