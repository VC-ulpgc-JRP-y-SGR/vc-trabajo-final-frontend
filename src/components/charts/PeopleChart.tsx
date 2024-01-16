import { Box, Heading } from '@chakra-ui/react';
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { fetchValue } from '../api/helpers';
import { useQuery } from 'react-query';

const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

export function PeopleChart(){

    const { data, isLoading, isError } = useQuery("visitors", fetchValue<number[]>("statistics/visitors/per_month/"));

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching value</div>;
    }

    return (
        <Wrapper>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data?.map((value, index) => ({name : months[index], visitors : value})) ?? []}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="visitors" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
        </ResponsiveContainer>
    </Wrapper>
    )

}

function Wrapper({children} : {children: React.ReactNode}){
    return(
            <Box w='100%' bgColor='white' p='12' borderRadius='2xl'>
                <Heading size='lg' mb='6'>Personas</Heading>
                <Box w='100%' h='400px'>
                    {children}
                </Box>
            </Box>
    )
}
