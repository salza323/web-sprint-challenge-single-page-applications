import React from "react";
import { Route } from 'react-router-dom'

import PizzaForm from './Form'

const App = () => {
  return (
    <div className = 'home-page'>
      <header>
        <h1>Lambda Eats</h1>
        <p>Welcome To Lambda Eats</p>
        <Route path = '/'>
          <PizzaForm/>
        </Route>
      </header>
    </div>
  );
};
export default App;
