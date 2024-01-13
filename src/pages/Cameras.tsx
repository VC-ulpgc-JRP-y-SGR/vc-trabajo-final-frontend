import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Camera from '../components/cameras/Camera'

interface Props {}

function Cameras(props: Props) {
    const {} = props

    return (
        <Box>
        <Flex gap={4}>
            <Camera title="Cámara frontal" url='127.0.0.1:5000'></Camera>
            <Camera title="Cámara costado" url='127.0.0.1:5000'></Camera>
        </Flex>
      </Box>    
    )
}

export default Cameras
