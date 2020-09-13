import React from 'react';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom'
import './home.css'




function Home() {
  return (
    <div className="container">
      <div className="form">

      <ul>
        <li>
   <Link to='/'>  
    <h1>SURVEY  TIGER</h1>
    </Link>  
    <Link to='/survey'>
    <Button variant="contained" color="primary" style={{width:'15rem', textDecoration:"none"}}>
    
        Create Survey
      </Button>
      </Link> 
      </li>
      <li>
     <Link to='/take'>

      <Button variant="contained" color="primary" style={{width:'15rem', textDecoration:"none"}}>
        Take Survey
      </Button>
      </Link>
      </li>
      </ul>
      </div>
    </div>
 
  );
}

export default Home;
