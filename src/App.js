import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
