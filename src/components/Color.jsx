import * as React from 'react';
import { useParams } from 'react-router-dom';
import { getColor } from './colors';

function Color() {
    
    const { id } = useParams();
    const color = getColor(id);

  return (
    <div>
        <h1>{color.name}</h1>
        <p>{color.family}</p>
    </div>
  )
}

export default Color