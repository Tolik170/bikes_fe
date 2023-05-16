export const styles = {
  container: {
    flex: 1,
    gap: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'backgroundColor',
    py: '80px'
  },
  titleWithDescription: {
    container: {
      mb: '40px',
      textAlign: 'center',
    },
    title: {
      typography: { sm: 'h4', xs: 'h5' }
    },
    description: {
      typography: { sm: 'body1', xs: 'body2' },
      color: 'primary.500'
    }
  },
  content: {
    display: 'flex',
    columnGap: '20px'
  },
  products: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'start',
    gap: '20px'
  }
}

