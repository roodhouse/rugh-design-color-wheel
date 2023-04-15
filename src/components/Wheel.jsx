import React from 'react';
import { Link } from 'react-router-dom';
import {getColors} from './colors.js';

function Wheel() {

    const colors = getColors();

  return (
    <div name='wheel' className='flex flex-col justify-center max-w-[1000px] mx-auto px-8  h-full pt-[15rem]'>
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

export default Wheel