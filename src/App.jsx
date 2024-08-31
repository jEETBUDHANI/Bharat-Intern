import React from 'react'
import './App.scss'
import Header from './components/header/Header'
import Home from './components/home/Home'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App