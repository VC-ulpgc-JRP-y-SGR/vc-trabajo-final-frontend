import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import Camera from '../components/cameras/Camera'
import { ip } from '../components/api/instance'

interface Props {}

function Cameras(props: Props) {
    const {} = props

    return (
        <Box>
        <Flex gap={4} flexDir='column'>
            <Camera title="Cámara frontal" url={"http://" + ip + '/streaming/front_camera/'}></Camera>
            <Camera title="Cámara costado" url={"http://" +ip + '/streaming/side_camera/'}></Camera>
        </Flex>
      </Box>    
    )
}

export default Cameras
