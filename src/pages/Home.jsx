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
        minH="100vh"
        paddingX="1rem"
        marginTop={{ base: '6rem', md: '5rem', lg: '3rem' }}
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
                    This is a test created by the Dev. Emmanuel Cortes for
                    ADPList
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
