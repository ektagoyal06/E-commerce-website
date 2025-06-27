import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
// import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import axios from 'axios';
import{useNavigate} from 'react-router-dom'

const Home = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const navigate=useNavigate();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Product Listing</h1>
        <button onClick={toggleTheme} className="p-2 bg-blue-500 text-white rounded">
          Toggle Theme
        </button>
        <h1 className="text-2xl font-bold">
          Welcome to the {darkMode ? 'Dark' : 'Light'} Mode
        </h1>
        <Link to="/cart" className="text-red-500 underline font-bold">
          Go to Cart
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full"
      />

      <div style={{padding:20}}>
        <button onClick={()=>navigate("/pay")}>Go to payment</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="border rounded p-4 shadow hover:shadow-lg">
            <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto mb-2" />
            <h2 className="font-semibold text-lg mb-1">{product.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">${product.price}</p>
            <Link to={`/product/${product.id}`} className="text-blue-400 underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;