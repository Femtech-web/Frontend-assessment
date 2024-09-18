import { selectAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '../chakra-config.helpers';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys)

const baseStyle = definePartsStyle({
  field: {
    cursor: 'pointer'
  }
})

const brandFilled = definePartsStyle({
  field: {
    background: 'brandGray',
    borderRadius: '10px',
    borderWidth: '1px',
    borderColor: 'brandBorder.2',
    color: 'lightBlue',
    _focus: {
      borderColor: 'brandGreen.400',
    }
  },
})

export const selectTheme = defineMultiStyleConfig({
  baseStyle,
  variants: { brandFilled },
  defaultProps: {
    variant: 'brandFilled',
  }
})