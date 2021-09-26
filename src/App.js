import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import { Component } from 'react';
import Home from "./Pages/Home/Home"
import Members from "./Pages/Members/Members";
import Gallery from "./Pages/Gallery/Gallery";
import About from "./Pages/About/About";
import Events from "./Pages/Events/Events";

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Home}/>
          <Route path="/members" render={Members}/>
          <Route path="/gallery" render={Gallery}/>
          <Route path="/about" render={About}/>
          <Route path="/events" render={Events}/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
