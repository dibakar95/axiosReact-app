import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Home from './Components/Home';
import { BrowserRouter, Switch, Route} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path ="/" component ={Home}/>
         </Switch>
      </div>
    </BrowserRouter>
  );
}


export default App;
