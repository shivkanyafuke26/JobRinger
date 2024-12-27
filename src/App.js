import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tabs from './components/Tabs';
import SearchBar from './components/SearchBar'; 
import Footer from './components/Footer';
import 'font-awesome/css/font-awesome.min.css';
import Job from './Job';

const App = () => {
  return (
    <Router>
      <Tabs />
      <SearchBar /> 
      <Job />
      <Footer />
    </Router>
  );
};
export default App;
