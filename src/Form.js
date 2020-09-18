import React, {useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useRouteMatch, Route } from 'react-router-dom'

import Pizza from './Pizza'

export default function PizzaForm(props){
    

    return (
        <>
        <Route path = '/pizza'>
            <Pizza/>
        </Route>
        </>
    )
}