import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import './styles/App.css';
import { Products } from './pages/Products';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default App;
