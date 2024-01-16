import { Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Visitors from '../components/charts/VisitorsChart'
import { PeopleChart } from '../components/charts/PeopleChart'
import GenreChart from '../components/charts/GenreChart'
import AgeChart from '../components/charts/AgeChart'
import { connect } from 'socket.io-client'
import { queryClient } from '../main'
import { ip } from '../components/api/instance'

interface Props {}

function Dashboard(props: Props) {
    const {} = props

    useEffect(() => {
        const socket = connect(`ws://${ip}:5000/visitors`, {
            reconnection: true,
            path: '/socket.io',
            transports: ['websocket']
        });

        socket.on('connect', function() {
            console.log('Connected to /visitors');
        });

        socket.on('visitors', function(data) {
            console.log(data);
            queryClient.invalidateQueries()
        });

        return () => {
            socket.disconnect();
            console.log('Disconnected');
        };
  }, []);

    return (
        <>
        <Flex mb='4' gap={4}>
          <Visitors url="statistics/visitors/current/" live text="Current visitors"></Visitors>
          <Visitors url="statistics/visitors/today/" text="Today visitors" ></Visitors>
          <Visitors url="statistics/visitors/week/" text="Weekly visitors" ></Visitors>
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
