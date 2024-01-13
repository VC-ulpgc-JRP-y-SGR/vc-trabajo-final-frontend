import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface Tab {
    label: string;
    path: string;
}

interface TabNavigationProps {
    tabs: Tab[];
}

const TabNavigation: React.FC<TabNavigationProps> = ({ tabs }) => {
    const location = useLocation();

    return (
        <Box mb='4'>
            <Flex alignItems='center' gap={4}>
                    {tabs.map((tab) => (
                            <Link to={tab.path} className={location.pathname === tab.path ? 'active' : ''}>
                                <Box borderRadius={10} key={tab.path} px='10' py='3' bgColor={location.pathname === tab.path ? "purple.500" : "white"} color={location.pathname === tab.path ? "white" : "gray.500"}>
                                        <Text fontWeight='semibold' fontSize='lg'>
                                            {tab.label}
                                        </Text>
                                </Box>
                            </Link>
                    ))}
            </Flex>
        </Box>
    );
};

export default TabNavigation;
