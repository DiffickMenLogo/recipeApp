import './App.scss'
import { Content } from './components/Content/Content'
import { Header } from './components/Header/Header'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Recipes } from './components/Recipes/Recipes'
import { RecipeAbout } from './components/RecipeAbout/RecipeAbout'
import { Favorites } from './components/Favorites/Favorites'
import Footer from './components/Footer/Footer'
import Login from './components/Autorization/Login'
import Registration from './components/Autorization/Registration'

function App() {
  const location = useLocation()

  return (
    <div className='App'>
      {location.pathname.includes('login') || location.pathname.includes('register') ? null : <Header />}
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/recipes/:id' element={<RecipeAbout />} />
        <Route path='/favorite' element={<Favorites />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registration />} />
      </Routes>
      {location.pathname.includes('login') || location.pathname.includes('register') ? null : <Footer />}
    </div>
  )
}

export default App
