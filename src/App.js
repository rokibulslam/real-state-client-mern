import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Login from './Pages/User/Login/Login';
import Register from './Pages/User/Register/Register';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import Purchase from './Pages/Purchase/Purchase';
import ManageOrder from './Pages/Dashboard/ManageOrder/ManageOrder';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import PrivateRoute from './Pages/User/PrivateRoute/PrivateRoute';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import Review from './Pages/Dashboard/Review/Review';
import Notfound from './Pages/Notfound/Notfound';
import Contact from './Pages/Contact/Contact';
import ManageProduct from './Pages/Dashboard/ManageProduct/ManageProduct';
import useAuth from './Hooks/useAuth';
import AdminRoute from './Pages/User/AdminRoute/AdminRoute';
import ProductPage from './Pages/Products/ProductPage/ProductPage';


function App() {
  const {admin} = useAuth();
  return (
    <div className="App">
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
                index
                element={admin ? <MakeAdmin /> : <MyOrder />}
              ></Route>
              <Route path="addProduct" element={<AddProduct />}></Route>
              <Route
                path="manageOrders"
                element={
                  <AdminRoute>
                    <ManageOrder />
                  </AdminRoute>
                }
              ></Route>
              <Route
                path="makeAdmin"
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              ></Route>
              <Route path="review" element={<Review />}></Route>
              <Route
                path="manageProduct"
                element={
                  <AdminRoute>
                    <ManageProduct />
                  </AdminRoute>
                }
              ></Route>
            </Route>

            <Route path="*" element={<Notfound></Notfound>}></Route>
          </Routes>
        </Router>
     
    </div>
  );
}

export default App;
