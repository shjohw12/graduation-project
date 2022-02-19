import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  // formStyle = {
  //   paddingBottom: 20,
  //   borderRadius: "30px 15px"
  // };

  // divStyle = {
  //   backgroundColor: "yellow",
  //   // position: "absolute",
  //   // top: "50%",
  //   // left: "50%",
  //   // transform: [
  //   //   "-50%", "-50%"
  //   // ],
  // };


  render() {
    return (
      <div class="search-box">
        <form>
          <input class="search-txt" type="text" placeholder="Enter Codeforces Handle" />

          <button class="search-btn" type="submit">검색</button>
        </form>
      </div>
    );
  }

}

export default App;