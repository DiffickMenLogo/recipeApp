
import './App.css';
import { Header } from './components/Header/Header';
import { ContentText } from './components/ContentText/ContentText';
import { Search } from './components/Search/Search';
import { Bti1 } from './components/bti1/btione';
import { Bti2 } from './components/bti2/btitwo';
import { Bti3 } from './components/bti3/btitree';

import tarel from './assets/Tarel.png';
import sko from './assets/Sko.png';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <ContentText />
        <Search />
        <div style={{ width: '60%', display: 'flex', gap: '100px', marginTop: '150px', marginLeft: '200px' }}>
          <Bti1 />
          <Bti2 />
          <Bti3 />
        </div>
        <div className="leftbottomimage">
          <img className="leftbottomimage" src={tarel} alt="salad" width={'100%'} height={'100%'} />
        </div>
        <div className="image">
          <img className="image" src={sko} alt="salad" width={'100%'} height={'100%'} />
        </div>
      </div>
    </div>
  );
}

export default App;
