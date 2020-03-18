import React from 'react';
import {
  BrowserRouter as Router,
  HashRouter ,
  Route,
  Link
} from 'react-router-dom'

import './App.css';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

function App() {
  return (
      <Router>
        <div>
          <ul>
          <li><Link to="/">Home</Link></li>
            <li><Link to="/home">Home2</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <a href="/about">链接</a>
          <hr/>
    
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
        </div>
      </Router>
  );
}

export default App;
