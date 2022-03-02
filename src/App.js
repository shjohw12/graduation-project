import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './Components/NavBar';
import Home from "./Home";
import './style.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
  }
};

export default App;