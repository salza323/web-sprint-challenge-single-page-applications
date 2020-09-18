import React from 'react'
import { Link } from 'react-router-dom'

export default function Pizza () {
    return(
        <>
            <nav>
                <Link to='/'> Order another pie! </Link>
            </nav>

            <div>
                <h2>
                    Awesome! Your pizza is on the way. Should be there in about 165 min.
                </h2>
            </div>
        </>
    )
}