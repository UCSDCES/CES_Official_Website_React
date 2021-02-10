import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import { Component } from 'react';
import Home from "./Pages/Home/Home"
import Members from "./Pages/Mmebers/Members";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact render={Home}/>
          <Route path="/members" render={Members}/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
