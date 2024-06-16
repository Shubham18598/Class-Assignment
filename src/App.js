import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
