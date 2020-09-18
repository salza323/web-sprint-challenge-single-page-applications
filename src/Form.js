import React from 'react'
import { Route, Link } from 'react-router-dom'

import Pizza from './Pizza'

export default function PizzaForm(props){
   
    const {values, change, submit, disabled, errors} = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const {name, value, type, checked} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change (name, valueToUse)
    }

    

    return (
        <div className = 'theForm'>
            <h1> Order A Delicios Pizza!</h1>

            <div className = 'errors'>
                <div>{errors.pizzaName}</div>
                <div>{errors.pizzaSize}</div>
                <div>{errors.peperoni}</div>
                <div>{errors.sausage}</div>
                <div>{errors.onion}</div>
                <div>{errors.bellPepper}</div>
                <div>{errors.goatCheese}</div>
            </div>

            <form onSubmit = {onSubmit}>
                <input type = 'text' name = 'pizzaName' value = {values.pizzaName}  onChange={onChange} placeholder = 'Name This Masterpiece' minLength='2'/>
                <br></br>
                <select name = 'pizzaSize' value = {values.pizzaSize}  onChange= {onChange}>
                    <option value = ''>--How Hungry Are Ya?--</option>
                    <option value = 'small'>Small-"Eh, I could eat."</option>
                    <option value = 'medium'>Medium-"Well, I'm sharing with my wife that says she doesn't want any. So Yeah".</option>
                    <option value = 'large'>Large-"Trying to feed an Army."</option>
                </select>
                <br></br>
                <label>Peperoni
                <input type = 'checkbox' name = 'peperoni' checked = {values.peperoni} onChange = {onChange}/>
                </label>
                <label>Sausage
                <input type = 'checkbox' name = 'sausage' checked = {values.sausage} onChange = {onChange}/>
                </label>
                <label>Onion
                <input type = 'checkbox' name = 'onion' checked = {values.onion} onChange = {onChange}/>
                </label>
                <label>Bell Pepper
                <input type = 'checkbox' name = 'bellPepper' checked = {values.bellPepper} onChange = {onChange}/>
                </label>
                <label>Goat Cheese
                <input type = 'checkbox' name = 'goatCheese' checked = {values.goatCheese} onChange = {onChange}/>
                </label>
                <button disabled = {disabled}>Place Order!</button>
            </form>    

            <Link to= '/Pizza'> 
            </Link>
        
        <Route path = '/Pizza'>
            <Pizza/>
        </Route>
        </div>
    )
}