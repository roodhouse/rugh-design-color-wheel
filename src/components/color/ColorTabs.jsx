import { React, useState } from 'react';
import CompColor from './CompColor';
import AnaColor from './AnaColor';
import TriadColor from './TriadColor';
import MonoColor from './MonoColor';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './styles.css'

function ColorTabs() {

  const [value, setValue] = useState('ana');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box className='w-full'>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab value="ana" label="Analogous" className='w-[25%]' />
          <Tab value="mono" label="Monochromatic" className='w-[25%]' />
          <Tab value="triad" label="Triad" className='w-[25%]' />
          <Tab value="comp" label="Complementary" className='w-[25%]' />
        </Tabs>
        <Box className='py-10 border-x-2 border-b-2 border-white border-solid'>
          <Box>
            {value === 'ana' && (
              <Box>
                <AnaColor />
              </Box>
            )}
          </Box>
          <Box>
            {value === 'mono' && (
              <Box>
                <MonoColor />
              </Box>
            )}
          </Box>
          <Box>
            {value === 'triad' && (
              <Box>
                <TriadColor />
              </Box>
            )}
          </Box>
          <Box>
            {value === 'comp' && (
              <Box>
                <CompColor />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default ColorTabs