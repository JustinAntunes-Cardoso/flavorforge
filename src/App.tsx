import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Input from './pages/Input';
import Recipe from './pages/Recipe';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/input" Component={Input} />
        <Route path="/recipe" Component={Recipe} />
        <Route path='*' Component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
