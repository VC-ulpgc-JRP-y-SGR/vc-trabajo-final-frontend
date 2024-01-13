import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from 'recharts';

const data = [
    {
      name: '0-15',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: '15-20',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '20-30',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: '30-50',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '50-60',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '60-100',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

function Inner() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
            <Bar dataKey="uv" fill="#8884d8" />
            <XAxis dataKey="name" />
            <Tooltip/>
            </BarChart>
        </ResponsiveContainer>
        );        
}

export default function GenreChart(){
    return (
          <Box height='300px' width='100%'>
            <Box bgColor='white' height='300px' p='7'  borderRadius='xl' >
              <Text fontSize='md' fontWeight='semibold'>Rangos de edad</Text>
              <Inner/>
            </Box>
          </Box>
    )
}

