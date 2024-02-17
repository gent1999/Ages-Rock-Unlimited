import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Home from './pages/Home';
import Explore from './pages/Explore';
import About from './pages/About';
import Contact from './pages/Contact';
import Payment from './pages/Payment';

const App = () => {
  return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
  );
};

export default App;
