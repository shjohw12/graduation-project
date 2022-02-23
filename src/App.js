import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    )


    // return (
    //   <div class="search-box">
    //     <form>
    //       <input class="search-txt" type="text" placeholder="Enter Codeforces Handle" />
    //       <button class="search-btn" type="submit">search</button>
    //     </form>
    //   </div>
    // );
  }
};

export default App;