export const styles = {
  global: {
    '*, *::before, &::after': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    },
    '::-webkit-scrollbar': {
      width: '4px',
    },
    '::-webkit-scrollbar-track': {
      background: '#f1f1f1',
    },
    '::-webkit-scrollbar-thumb': {
      background: 'brandBorder.1',
      borderRadius: '8px',
    },
    'body, html': {
      overflowX: 'hidden',
      scrollBehavior: 'smooth',
      backgroundColor: 'brandGray',
    },
    'p': {
      color: 'textPrimary'
    },
  },
}