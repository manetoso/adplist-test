import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    'true-black': {
      100: '#595959',
      200: '#595959',
      300: '#333333',
      400: '#262626',
      500: '#1A1A1A',
      600: '#010101',
      700: '#000',
      800: '#000',
      900: '#000',
    },
    'true-white': {
      100: '#FAFAFA',
      200: '#FCFCFC',
      300: '#FAFAFA',
      400: '#FDFDFD',
      500: '#FDFDFD',
      600: '#E4E4E4',
      700: '#D8D8D8',
      800: '#CBCBCB',
      900: '#B3B3B3',
    },
    accent: {
      100: '#F1127B',
      200: '#F270AE',
      300: '#F05AA0',
      400: '#F14295',
      500: '#EF127A',
      600: '#C30C63',
      700: '#AB0A57',
      800: '#93094A',
      900: '#640632',
    },
  },
});

export default theme;
