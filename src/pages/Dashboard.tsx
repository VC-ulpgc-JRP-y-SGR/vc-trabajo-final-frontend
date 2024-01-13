import { Flex } from '@chakra-ui/react'
import React from 'react'
import Visitors from '../components/charts/VisitorsChart'
import { PeopleChart } from '../components/charts/PeopleChart'
import GenreChart from '../components/charts/GenreChart'
import AgeChart from '../components/charts/AgeChart'

interface Props {}

function Dashboard(props: Props) {
    const {} = props

    return (
        <>
        <Flex mb='4' gap={4}>
          <Visitors live text="Current visitors" value={400}></Visitors>
          <Visitors text="Today visitors" value={400}></Visitors>
          <Visitors text="Current visitors" value={400}></Visitors>
        </Flex>
        <PeopleChart/>
        <Flex mt= '4' gap={4}>
          <GenreChart/>
          <AgeChart/>
        </Flex>
      </> 
    )
}

export default Dashboard
