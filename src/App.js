import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import { Component } from 'react';
import Home from "./Pages/Home/Home"
import Members from "./Pages/Mmebers/Members";
import Gallery from "./Pages/Gallery/Gallery";

require('babel-core').transform('code', {
  presets: ['es2015-node5'],
})

class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" exact component={Home}/>
          <Route path="/members" render={Members}/>
          <Route path="/gallery" render={Gallery}/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
