import { Text, Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

interface Props {
    text: string,
    value : number,
    live ?: boolean
}

function Visitors(props: Props) {
    const {} = props

    return (
       <Box w='100%' bgColor='white' p='6' px='10' borderRadius='xl'>
            <Flex>
                <Text fontSize='md' fontWeight='semibold'>{props.text}</Text>
            </Flex>
            {
                props.live && 
                <Flex color='red' alignItems='center' justifyContent='left' gap={1} m={0}>
                    <Box h='1' w='1' borderRadius="50%" bgColor='red'></Box>
                    <Text fontSize='xs' fontWeight='semibold'>Live</Text>
                </Flex>
            }
            <Heading>{props.value}</Heading>
       </Box> 
    )
}

export default Visitors
