import * as React from 'react'

// 1. import `ChakraProvider` component
import { Box, ChakraProvider, Container, Flex, Heading, Text } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import TabNavigation from '../components/navigation/TabNavigation'

function Wrapper() {
  return (
    <ChakraProvider>
      <Box minH='100vh' width='100vw' bgColor='gray.100'>
      <Container py='16' maxW='container.xl'>
        <Flex justifyContent='space-between' alignItems='center'>
          <Heading mb='9'>Bienvenido de nuevo 👋</Heading>
        </Flex>
        <TabNavigation tabs={[{path : "/", label : "Métricas"},{path : "/live-cams", label : "Cámaras"} ]}></TabNavigation>
        <Outlet/>
      </Container>
      </Box>
    </ChakraProvider>
  )
}

export default Wrapper
