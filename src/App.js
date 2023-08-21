import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import News from './components/News'


import{
  BrowserRouter as Router,
  Switch,
  Route,
 
  link

}from "react-router-dom";


import React, { Component } from 'react'

export default class App extends Component {

  render() {
    return ( 
      <div>
        <Router>
       <Navbar/>
      
       <Switch>
          <Route exact path="/general"><News key="general" pageSize={5} country="in" category="general"/></Route>
          <Route exact path="/general"><News key="general" pageSize={5} country="in" category="general"/></Route>
          <Route exact path="/business"><News key="business"  pageSize={5} country="in" category="business"/></Route>
          <Route exact path="/Entertainment"><News  key=" Entertainment"pageSize={5} country="in" category="Entertainment"/></Route>
         
          <Route exact path="/health"><News key="health" pageSize={5} country="in" category="health"/></Route>
          <Route exact path="/science"><News key="science"pageSize={5} country="in" category="science"/></Route>
          <Route exact path="/sports"><News key="sports" pageSize={5} country="in" category="sports"/></Route>
          <Route exact path="/technology"><News key="technology" pageSize={5} country="in" category="technology"/></Route>

          
          
        </Switch>
       
       </Router>
      </div>
      
    )
  }
}
