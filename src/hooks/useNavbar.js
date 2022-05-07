import { useMediaQuery } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { navIcons } from '../routes/navIcons';

export const useNavbar = () => {
  const [isLg] = useMediaQuery('(min-width: 62em)');
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(navIcons[0]);
  const handleIsOpen = () => {
    setIsOpen(oldIsOpen => !oldIsOpen);
  };
  useEffect(() => {
    if (isOpen) {
      setSelectedIcon(navIcons[1]);
      document.body.style.overflow = 'hidden';
    } else {
      setSelectedIcon(navIcons[0]);
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return {
    isLg,
    isOpen,
    selectedIcon,
    handleIsOpen,
    location,
  };
};
