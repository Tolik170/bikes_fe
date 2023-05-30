export const styles = {
  container: {
    backgroundColor: 'lightBackgroundColor',
    display: 'block',
    textAlign: 'center',
    p: '35px 40px'
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '25px',
    minHeight: '340px',
    mb: '50px'
  },
  card: {
    img: { minHeight: { xs: '140px', sm: '194px' } },
    titleWithDescription: {
      container: { textAlign: 'left' },
      title: { typography: { xs: 'midTitle', sm: 'h6' }, mt: '25px' },
      description: { typography: 'subtitle1' }
    }
  }
}
