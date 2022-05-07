import { Box, IconButton } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

const MotionIconButton = motion(IconButton);

export const MobileNavButton = ({ selectedIcon, handleIsOpen }) => {
  return (
    <Box position="absolute" zIndex="100" right="1.5rem">
      <AnimatePresence exitBeforeEnter>
        <MotionIconButton
          key={selectedIcon.label}
          initial={{ opacity: 0, rotate: -180, scale: 0.25 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 180, scale: 0.25 }}
          transition={{ duration: 0.15, type: 'easeInOut' }}
          aria-label="menu icon"
          fontSize="4xl"
          icon={<selectedIcon.icon />}
          colorScheme="true-black"
          variant="ghost"
          onClick={handleIsOpen}
        />
      </AnimatePresence>
    </Box>
  );
};
