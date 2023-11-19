
import './App.scss';
import { Content } from './components/Content/Content';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';


function App() {


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
      </Routes>
    </div >
  );
}

export default App;
