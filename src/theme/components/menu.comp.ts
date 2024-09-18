import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '../chakra-config.helpers';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys)

const baseStyle = definePartsStyle({
  button: {
    background: 'brandGray',
    borderRadius: '10px',
    borderWidth: '1px',
    borderColor: 'brandBorder.2',
    _focus: {
      borderColor: 'brandGreen.400',
    }
  },

  list: {
    borderRadius: '10px',
    borderWidth: '1px',
    borderColor: 'brandGreen.400',
  },

  item: {
    fontWeight: 500,
    _hover: { bg: 'brandGray' }
  }
})

export const menuTheme = defineMultiStyleConfig({
  baseStyle
})