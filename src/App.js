import './App.css';
import { BrowserRouter,Route, Routes} from 'react-router-dom';

import Navbar from './components/navBar/navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Error from './components/error.jsx';
import AdidasUI from './pages/AdidasUI';

function App() {
 
  return (
    <div className="App">

<BrowserRouter>
 <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/product/:id"
          element={<AdidasUI />}
        />
        <Route path="*" element={<Error />} />
      </Routes>

      
    </BrowserRouter>
    </div>
      
  );
}

export default App;
