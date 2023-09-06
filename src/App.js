import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar'; // Importa el componente Navbar
import Home from './Home';
import About from './About';

function App() {
  return (
    <Router>
      <div>
        <Navbar />  
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

