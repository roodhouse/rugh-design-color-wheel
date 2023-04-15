import * as React from 'react';
import { Link } from 'react-router-dom';
import {getColors} from './colors.js'

function Home() {
    
    const colors = getColors();

  return (
    <div>
        <h1>Colors</h1>
        <ul>
            {colors.map(({id, name, family, number}) => (
                <li key={id}>
                    <Link to={`color/${id}`}>{name} is in the {family} family {number}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Home