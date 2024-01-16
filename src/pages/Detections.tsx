import { Box, Flex, Image, SimpleGrid, Text} from '@chakra-ui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { fetchValue } from '../components/api/helpers'
import { ip } from '../components/api/instance'

interface Props {}

interface Entrance{
    age_interval : string, 
    genre : "m" | "f", 
    image : string, 
    timestamp : string 
}

const genero ={
    "m" : "Masculino",
    "f" : "Femenino"
}
function Detections(props: Props) {

    const {data, status} = useQuery('detections', fetchValue<Entrance[]>("statistics/entrances/"))

    if(status === "loading"){
        return <Box>Loading...</Box>
    }

    if(status === "error"){
        return <Box>Error</Box>
    }

    return <SimpleGrid columns={5} gap={4}>{
        data?.map((entrance) => (
             <Box bgColor='white' p={5} py={9} borderRadius={20} display="flex" justifyContent="center" alignItems="center" flexDir="column" >
                <Image borderRadius={20} width={190} src={"http://" + ip + entrance.image}></Image>
                <Flex flexDir='column' gap={1} mt="5" justifyContent="center" alignItems="center">
                    <Flex>
                        <Text fontWeight="bold">Edad: </Text>
                        <Text>{entrance.age_interval}</Text>
                    </Flex>
                    <Flex>
                        <Text fontWeight="bold">Género: </Text>
                        <Text>{genero[entrance.genre]}</Text>
                    </Flex>
                    <Flex>
                        <Text fontWeight="bold">Fecha: </Text>
                        <Text>{entrance.timestamp}</Text>
                    </Flex>
                </Flex>
            </Box>
        ))
    }
</SimpleGrid>
}

export default Detections
