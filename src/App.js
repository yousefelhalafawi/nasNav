import './App.css';
import { BrowserRouter,Route, Routes} from 'react-router-dom';

import Navbar from './components/navBar/navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Error from './components/error.jsx';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="*" element={<Error/>}></Route>

    </Routes>
    </BrowserRouter>

    </div>
      
  );
}

export default App;
