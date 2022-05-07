import { Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { OnMeetContext } from '../context/onMeetContext';
import { AnimatedRoutes } from './components';
import { Navbar } from './Navbar';

export const Navigation = () => {
  const { isOnMeet } = useContext(OnMeetContext);
  return (
    <BrowserRouter>
      <Flex flexDir="column">
        {isOnMeet === false && <Navbar />}
        <AnimatedRoutes />
      </Flex>
    </BrowserRouter>
  );
};
