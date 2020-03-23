import React from 'react';
import { Route, Switch, useParams, Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/portfolio/123">Portfolio</Link>
      </li>
    </ul>
  </div>
);

const Portfolio = () => {
  let { id } = useParams();

  return (
    <div>
      Portfolio component
      <p>Url params: {id}</p>
    </div>
  );
};
import Home from './Home';
import './App.css';

const App = () => (
  <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/portfolio/:id/:sid" component={Portfolio} />
    </Switch>
  </>
);

export default App;
