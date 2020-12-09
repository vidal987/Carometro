import React from "react";
import "./App.scss";
import { Login } from './Login/Login.js';

class App extends React.Component {

  render() {

    return (
      <div className="App">

        <div className="login">
          <div className="container">  
              <Login />
          </div>
        </div>
      </div>
    );
  }
};

export default App;
