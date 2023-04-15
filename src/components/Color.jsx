import * as React from 'react';
import { useParams } from 'react-router-dom';
import { getColor, getColors } from './colors';

function Color() {
    
    const { id } = useParams();
    const color = getColor(id);
    const colors = getColors();

    // console.log(colors)

  return (
    <div style={{backgroundColor: color.hex}}>
        <h1>{color.name}</h1>
        <p>{color.family}</p>
        <p>{color.comp.colorOne.name}</p>

        
        <div style={{backgroundColor: color.comp.colorOne.hex, width: '150px', height: '150px'}}>{color.name}</div>
            
        
    </div>
  )
}

export default Color