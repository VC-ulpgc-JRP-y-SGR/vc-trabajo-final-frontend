import { Box, Text } from '@chakra-ui/react';
import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from 'recharts';
import { fetchValue } from '../api/helpers';
import { useQuery } from 'react-query';

function Inner() {

      const { data, isLoading, isError } = useQuery("ageratio", fetchValue<{name : string, value : number}[]>("statistics/visitors/age_interval_count/"));

      if (isLoading) {
          return <div>Loading...</div>;
      }

      if (isError) {
          return <div>Error fetching value</div>;
      }

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={150} height={40} data={data}>
            <Bar dataKey="value" fill="#8884d8" />
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

