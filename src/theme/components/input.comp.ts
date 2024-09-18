import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '../chakra-config.helpers';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const brandFilled = definePartsStyle({
  field: {
    background: 'brandGray',
    borderRadius: '10px',
  },
});

const docsFilled = definePartsStyle({
  field: {
    background: 'brandGray',
    borderRadius: '10px',
    borderWidth: '1px',
    borderColor: 'brandBorder.2',
    color: 'grayscale.400',
    fontWeight: 600,

    _placeholder: {
      color: 'lightBlue',
      fontWeight: 400
    },

    _focus: {
      borderColor: 'brandGreen.400',
    }
  },
})

export const inputTheme = defineMultiStyleConfig({
  variants: { brandFilled, docsFilled },
  defaultProps: {
    variant: 'brandFilled',
  }
})