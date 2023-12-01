
import './App.scss';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Recipes } from './components/Recipes/Recipes';
import { RecipeAbout } from './components/RecipeAbout/RecipeAbout';
import { Favorites } from './components/Favorites/Favorites';


function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeAbout />} />
        <Route path="/favorite" element={<Favorites />} />
      </Routes>
    </div >
  );
}

export default App;
