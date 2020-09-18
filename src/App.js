import React, { useState, useEffect } from "react";
import { Route, Link } from 'react-router-dom'
import * as yup from 'yup'
import Axios from "axios";

import PizzaForm from './Form'
import schema from './validation/FromSchema'

const initialFormValues = {
  pizzaName: '', 
  pizzaSize: '', 
  peperoni: '', 
  sausage: '', 
  onion: '', 
  bellPepper: '', 
  goatCheese: '', 
}

const initialFormErrors = {
  pizzaName: '', 
  pizzaSize: '', 
  peperoni: '', 
  sausage: '', 
  onion: '', 
  bellPepper: '', 
  goatCheese: '', 
}

const initialPizzas = []
const initialDisabled = true


function App () {
  const [pizza, setPizza] = useState(initialPizzas)
  const [formValue, setFormValue] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewPizza = newPizza => {
    Axios.post('', newPizza)
      .then(res => {
        setPizza([...pizza, res.data])
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
      .finally(() => {
        setFormValue(initialFormValues)
      })
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: ''
      })
    })
    .catch(err => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValue({
      ...formValue, 
      [name]: value
    })
  }

  const formSubmit = () => {
    const newPizza = {
      pizzaName: formValue.pizzaName.trim(), 
      pizzaSize: formValue.pizzaSize, 
      peperoni: formValue.peperoni, 
      sausage: formValue.sausage, 
      onion: formValue.onion, 
      bellPepper: formValue.bellPepper, 
      goatCheese: formValue.goatCheese, 
    }
    postNewPizza(newPizza)
  }

  useEffect(() => {
    schema.isValid(formValue)
      .then(valid => {
        setDisabled(!valid)
      }, [formValue])
  })


  return (
    <div className = 'home-page'>
      <header>
        <h1>Lambda Eats</h1>
        <p>Welcome To Lambda Eats</p>

        <Link to='/'> Home </Link>
      </header>


   
      <Route path = '/'>
        <PizzaForm
          values={formValue}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
      </Route>
    
    </div>
    
  );
};
export default App;
