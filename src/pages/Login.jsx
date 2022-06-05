import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { PageAnimation } from './';
import { Button, Center, Flex, Heading, Text } from '@chakra-ui/react';

export const Login = () => {
  const { isAuthenticated, loginWithPopup } = useAuth0();
  let navigate = useNavigate();
  if (isAuthenticated) {
    return navigate('/');
  }
  return (
    <PageAnimation>
      <Center
        minH={{ base: 'calc(100vh - 5rem)', md: 'calc(100vh - 7rem)' }}
        paddingX="2rem"
        marginTop={{ base: '5rem', md: '7.5rem' }}
      >
        <Flex flexDir="column" alignItems="center" gap="1rem">
          <Heading textAlign="center" color="gray.700">
            You are in the Login Page, Click the button below to Log In
          </Heading>
          <Flex justifyContent="center" gap="1rem">
            <Button
              colorScheme="accent"
              paddingX="1.5rem"
              paddingY="1.5rem"
              onClick={() => loginWithPopup()}
              variant="solid"
            >
              <Text fontSize="2xl">Log In</Text>
            </Button>
          </Flex>
        </Flex>
      </Center>
    </PageAnimation>
  );
};
