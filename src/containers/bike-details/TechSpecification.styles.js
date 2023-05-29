export const styles = {
  container: {
    width: '100%'
  },
  title: {
    color: 'primary.700',
    typography: { xs: 'h6', sm: 'h5' }
  },
  cardsContainer: {
    mt: { xs: '20px', sm: '30px' },
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  card: {
    boxShadow: 'none',
    border: '1px solid',
    borderColor: 'primary.100',
    p: 0
  },
  iconTitleDescription: {
    container: {
      display: 'flex',
      alignItems: 'start',
      width: '100%',
      p: { xs: '10px 15px', sm: '25px' },
      color: 'primary.600'
    },
    img: {
      display: { xs: 'none', sm: 'block' },
      width: '50px',
      height: '50px',
      color: 'blue',
    },
    titleWithDescription: {
      container: {
        display: 'flex',
        flexDirection: 'column',
        rowGap: { xs: '10px', sm: '15px' },
        mx: { xs: 0, sm: '20px', md: '35px' }
      },
      title: {
        typography: { xs: 'subtitle1', sm: 'h6' }
      },
      description: {
        typography: { xs: 'body2', sm: 'body1' },
        color: 'primary.700'
      }
    }
  }
}
