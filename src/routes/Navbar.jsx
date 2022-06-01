import { Box, Flex, Image } from '@chakra-ui/react';
import { MobileNavButton, MobileNavList, NavList } from './components';
import { useNavbar } from '../hooks/useNavbar';
import Logo from '../assets/planet-logo.svg';

export const Navbar = () => {
  const { isLg, isOpen, selectedIcon, handleIsOpen, location } = useNavbar();
  return (
    <Box
      position="fixed"
      bg="white"
      boxShadow="lg"
      zIndex="90"
      paddingX="1rem"
      w="100vw"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        marginX="auto"
        maxW={{
          base: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        }}
        paddingY="1.5rem"
        paddingX={{ base: '1.5rem', lg: '0' }}
      >
        <Box>
          <Image
            src={Logo}
            alt="app logo"
            w={{ base: '4rem', md: '5rem' }}
            transform="scale(2)"
          />
        </Box>
        {!isLg && (
          <>
            <MobileNavButton
              selectedIcon={selectedIcon}
              handleIsOpen={handleIsOpen}
            />
            <MobileNavList
              isOpen={isOpen}
              handleIsOpen={handleIsOpen}
              location={location}
            />
          </>
        )}
        {isLg && <NavList location={location} />}
      </Flex>
    </Box>
  );
};
