import React from 'react';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom'
import publish from './components/publish'
import './App.css';
import  Home  from './components/home';
import CreateSurvey from './components/createsurvey';
import take from './components/take'

function App() {
  return (
    <div className="container">
     
    <Router>
    <Route exact path='/publish' component={publish}/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/survey' component={CreateSurvey}/>
      <Route exact path='/take' component={take}/>
    </Router>

    </div>
 
  );
}

export default App;
