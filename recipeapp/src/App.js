
import './App.scss';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Recipes } from './components/Recipes/Recipes';
import { RecipeAbout } from './components/RecipeAbout/RecipeAbout';


function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:id" element={<RecipeAbout />} />
      </Routes>
    </div >
  );
}

export default App;
