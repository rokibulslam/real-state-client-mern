import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Login from './Pages/User/Login/Login';
import AuthProvider from './Context/AuthProvider';
import Register from './Pages/User/Register/Register';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import ProductPage from './Pages/AllProducts/ProductPage/ProductPage';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/productPage" element={<ProductPage />}></Route>
            <Route path="/home/purchase/:id" element={<Purchase />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/addProduct" element={<AddProduct />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
