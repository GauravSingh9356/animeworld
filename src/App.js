import Header from './components/Header';
import Products from './components/Products';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/:id' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
