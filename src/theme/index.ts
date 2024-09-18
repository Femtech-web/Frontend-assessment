import { extendTheme } from '@chakra-ui/react';
import { styles } from './global.styles';
import { colors } from './foundations/colors';
import { borderRadius } from './foundations/border-radius';
import { useFonts } from './fonts';

// components theming
import { inputTheme, selectTheme, menuTheme } from './components';

const overrides = {
  styles,
  colors,
  fonts: useFonts,
  radii: borderRadius,
  components: {
    Input: inputTheme,
    Select: selectTheme,
    Menu: menuTheme
  },
}

export default extendTheme(overrides)