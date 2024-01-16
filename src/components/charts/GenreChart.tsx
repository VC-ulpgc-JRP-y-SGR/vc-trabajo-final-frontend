import { Box,  Text } from '@chakra-ui/react';
import React from 'react'
import { useQuery } from 'react-query';
import { PieChart, Pie, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { fetchValue } from '../api/helpers';


function Inner() {

    const { data, isLoading, isError } = useQuery("malefemale", fetchValue<number[]>("statistics/visitors/male_female_ratio/"));

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching value</div>;
    }


    return (
        <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={90} fill="#8884d8" />
          <Tooltip />
          <Legend></Legend>
        </PieChart>
      </ResponsiveContainer>
    )
}

export function GenreChart(){
    return (
          <Box height='300px' width='100%'>
            <Box bgColor='white' height='300px' p='7'  borderRadius='xl' >
              <Text fontSize='md' fontWeight='semibold'>Genero</Text>
              <Inner/>
            </Box>
          </Box>
    )
}

export default GenreChart
