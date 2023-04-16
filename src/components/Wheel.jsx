import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';


import {getColors} from './colors.js';
import List from './List.jsx';

function Wheel() {

    const [inputText, setInputText] = useState('');
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }
    const colors = getColors();

  return (
    <div name='wheel' className='flex flex-col justify-center max-w-[1000px] mx-auto px-8  h-full pt-[15rem]'>
        <h1>React Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
        <h1>Colors</h1>
      <List input={inputText} />
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