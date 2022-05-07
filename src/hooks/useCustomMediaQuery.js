import { useMediaQuery } from '@chakra-ui/react';

export const useCustomMediaQuery = () => {
  const [isLg] = useMediaQuery('(min-width: 62em)');
  return { isLg };
};
