import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateItem from './pages/CreateItem';
import UpdateItem from './pages/UpdateItem';
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateItem />} />
        <Route path="/update/:id" element={<UpdateItem />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
