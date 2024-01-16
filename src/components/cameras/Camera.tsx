import { Box, Heading } from '@chakra-ui/react'
import React from 'react'

interface Props {
    url : string,
    title : string
}

function Camera(props: Props) {
    const {title} = props

    return (
          <Box w='100%' bgColor='white' p='4' borderRadius='xl'>
            <Heading size='md' color='gray.700' mb='5'>{title}</Heading>
            <img src={props.url} style={{width: "100%", height: 700, borderRadius: 20}}/>
          </Box>
    )

}

export default Camera
