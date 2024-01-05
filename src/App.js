// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/HomePage';
import Navbar from './Components/NavBar';
import Offer from './Components/Offer/Offer';
import LogIn from './Components/LogIn';
import SignUp from './Components/SignUp';
import Admin from './Components/Admin';
import Shop from './Components/Shop';
import Explore from './Components/Explore';

function App() {
  return (
    <Router>
      <div className="App">
        {/* NavBar ra Offer hide huncha for admin page */}
        {window.location.pathname !== '/admin' && <Offer />}
        {window.location.pathname !== '/admin' && <Navbar />}
        
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/" element={<Home />} />
          <Route path="/shop/*" element={<Shop />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
