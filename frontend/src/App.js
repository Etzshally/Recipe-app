import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Recipes from './components/Recipes';
import AddRecipe from './components/AddRecipe';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/recipes" component={Recipes} />
        <Route path="/add-recipe" component={AddRecipe} />
      </Switch>
    </Router>
  );
}

export default App;
