import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';
import { getColors, colors } from './colors.js';
import List from './List.jsx';

function Wheel() {

    const [inputText, setInputText] = useState('');
    let inputHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    }
    
  return (
    <div name='wheel' className='flex flex-col justify-center max-w-[1300px] mx-auto px-8  h-full pt-[15rem] mb-8'>
        <h1 className='mb-2'>Color scheme search</h1>
      <div className="search mb-8">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search by Sherwin-Williams color name"
        />
      </div>
      <List input={inputText} />
    </div>
  )
}

export default Wheel