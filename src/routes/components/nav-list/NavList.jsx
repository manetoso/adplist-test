import { Box, Button, HStack, Text } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

export const NavList = ({ location }) => {
  const { isAuthenticated, logout } = useAuth0();
  return (
    <Box>
      <HStack spacing="4rem">
        {routes.map(route => {
          if (isAuthenticated) {
            if (route.requireAuth) {
              return (
                <Box
                  key={route.to}
                  fontSize="3xl"
                  cursor="pointer"
                  borderRadius="md"
                  transition="ease-in-out"
                  transitionDuration="300ms"
                  _hover={{
                    bg: 'blackAlpha.100',
                  }}
                  role="group"
                  as={NavLink}
                  to={route.to}
                >
                  <Text
                    borderBottom="2px"
                    paddingX="0.5rem"
                    borderBottomColor={
                      location.pathname === route.to
                        ? 'brand.black'
                        : 'transparent'
                    }
                    transition="ease-in-out"
                    transitionDuration="300ms"
                    _hover={{
                      borderBottomColor: 'brand.black',
                    }}
                  >
                    {route.label}
                  </Text>
                </Box>
              );
            }
          } else {
            if (!route.requireAuth) {
              return (
                <Box
                  key={route.to}
                  fontSize="3xl"
                  cursor="pointer"
                  borderRadius="md"
                  transition="ease-in-out"
                  transitionDuration="300ms"
                  _hover={{
                    bg: 'blackAlpha.100',
                  }}
                  role="group"
                  as={NavLink}
                  to={route.to}
                >
                  <Text
                    borderBottom="2px"
                    paddingX="0.5rem"
                    borderBottomColor={
                      location.pathname === route.to
                        ? 'brand.black'
                        : 'transparent'
                    }
                    transition="ease-in-out"
                    transitionDuration="300ms"
                    _hover={{
                      borderBottomColor: 'brand.black',
                    }}
                  >
                    {route.label}
                  </Text>
                </Box>
              );
            }
          }
        })}
        {isAuthenticated && (
          <Button
            colorScheme="true-black"
            paddingX="1.5rem"
            paddingY="1.5rem"
            onClick={() => logout()}
            variant="ghost"
          >
            <Text fontSize="2xl">Log Out</Text>
          </Button>
        )}
      </HStack>
    </Box>
  );
};
