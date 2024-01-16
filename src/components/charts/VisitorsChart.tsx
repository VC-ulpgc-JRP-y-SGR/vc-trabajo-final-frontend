import { useQuery } from 'react-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { fetchValue } from '../api/helpers';
import { useEffect } from 'react';
import { Manager, connect } from "socket.io-client";

interface Props {
    text: string,
    live ?: boolean,
    url ?: string
}


function Visitors(props: Props) {
    const { data, isLoading, isError, refetch } = useQuery(props.url ?? "", fetchValue<{value : number}>(props?.url ?? ""));

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error fetching value</div>;
    }

    return (
        <Box w='100%' bgColor='white' p='6' px='10' borderRadius='xl'>
            <Flex>
                <Text fontSize='md' fontWeight='semibold'>{props.text}</Text>
            </Flex>
            {props.live && (
                <Flex color='red' alignItems='center' justifyContent='left' gap={1} m={0}>
                    <Box h='1' w='1' borderRadius="50%" bgColor='red'></Box>
                    <Text fontSize='xs' fontWeight='semibold'>Live</Text>
                </Flex>
            )}
            <Heading>{data?.value}</Heading>
        </Box>
    );
}

export default Visitors;
