import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { Center, Flex, Heading, Text } from '@chakra-ui/react';
import { PageAnimation } from './';
import { MeetsGrid } from '../components';

export const Home = () => {
  const { user, isAuthenticated, isLoading: authIsLoading } = useAuth0();
  let navigate = useNavigate();
  if (!isAuthenticated) {
    return navigate('/login');
  }
  return (
    <PageAnimation>
      <Center
        minH={{ base: 'calc(100vh - 5rem)', md: 'calc(100vh - 7rem)' }}
        paddingX="1rem"
        paddingY="2rem"
        marginTop={{ base: '5rem', md: '7.5rem' }}
      >
        <Flex flexDir="column" gap="1rem">
          {authIsLoading ? (
            <Heading textAlign="center" color="gray.700">
              Loading...
            </Heading>
          ) : (
            <>
              {isAuthenticated && (
                <>
                  <Heading textAlign="center" color="gray.700">
                    Wellcome {user.name}
                  </Heading>
                  <Heading color="gray.700" fontSize="lg" textAlign="end">
                    This is a video-call app created by the Dev. Emmanuel Cortes
                  </Heading>
                </>
              )}
              <MeetsGrid />
            </>
          )}
        </Flex>
      </Center>
    </PageAnimation>
  );
};
