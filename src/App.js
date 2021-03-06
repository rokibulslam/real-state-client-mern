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
import ManageOrder from './Pages/Dashboard/ManageOrder/ManageOrder';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import PrivateRoute from './Pages/User/PrivateRoute/PrivateRoute';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import Review from './Pages/Dashboard/Review/Review';
import Notfound from './Pages/Notfound/Notfound';
import Contact from './Pages/Contact/Contact';
import ManageProduct from './Pages/Dashboard/ManageProduct/ManageProduct';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/productPage" element={<ProductPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route
              path="/home/purchase/:id"
              element={
                <PrivateRoute>
                  <Purchase />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route
                path="/dashboard/addProduct"
                element={<AddProduct />}
              ></Route>
              <Route path="/dashboard/orders" element={<ManageOrder />}></Route>
              <Route path="/dashboard/myOrders" element={<MyOrder />}></Route>
              <Route
                path="/dashboard/makeAdmin"
                element={<MakeAdmin />}
              ></Route>
              <Route path="/dashboard/review" element={<Review />}></Route>
              <Route path="/dashboard/manageProduct" element={<ManageProduct />}></Route>
            </Route>

            <Route path="*" element={<Notfound></Notfound>}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
