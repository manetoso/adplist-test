import {
  Box,
  Button,
  Image,
  List,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

export const MobileNavList = ({ isOpen, handleIsOpen, location }) => {
  const { isAuthenticated, logout } = useAuth0();
  return (
    <>
      <Box
        position="absolute"
        bg="white"
        left="0"
        top={isOpen ? '0' : '-430%'}
        right="0"
        borderBottomRadius="3xl"
        zIndex="90"
        transition="ease-in-out"
        transitionDuration="500ms"
      >
        <VStack paddingY="5rem">
          <Image
            src="./img/adplist-logo.svg"
            alt="app logo"
            w="5rem"
            marginBottom="1rem"
          />
          <List spacing="2">
            {routes.map(route => {
              if (isAuthenticated) {
                if (route.requireAuth) {
                  return (
                    <ListItem
                      key={route.to}
                      textAlign="center"
                      fontSize="3xl"
                      cursor="pointer"
                    >
                      <Button
                        w="100%"
                        fontSize="3xl"
                        colorScheme="true-black"
                        variant={
                          location.pathname === route.to ? 'solid' : 'ghost'
                        }
                        as={NavLink}
                        to={route.to}
                        onClick={() => {
                          handleIsOpen();
                        }}
                      >
                        {route.label}
                      </Button>
                    </ListItem>
                  );
                }
              } else {
                if (!route.requireAuth) {
                  return (
                    <ListItem
                      key={route.to}
                      textAlign="center"
                      fontSize="3xl"
                      cursor="pointer"
                    >
                      <Button
                        w="100%"
                        fontSize="3xl"
                        colorScheme="true-black"
                        variant={
                          location.pathname === route.to ? 'solid' : 'ghost'
                        }
                        as={NavLink}
                        to={route.to}
                        onClick={() => {
                          handleIsOpen();
                        }}
                      >
                        {route.label}
                      </Button>
                    </ListItem>
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
          </List>
        </VStack>
      </Box>
      <Box
        position="fixed"
        bg="blackAlpha.400"
        left={isOpen ? '0' : '-100vw'}
        top="0"
        minW="100vw"
        minH="100vh"
        zIndex="89"
        onClick={handleIsOpen}
      ></Box>
    </>
  );
};
