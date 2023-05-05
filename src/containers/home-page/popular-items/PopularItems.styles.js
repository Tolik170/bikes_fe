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
    gap: '25px',
    mb: '50px'
  },
  card: {
    titleWithDescription: {
      container: {
        textAlign: 'left'
      },
      title: {
        typography: 'h6',
        mt: '25px',
      },
      description: {
        typography: 'subtitle1',
      }
    }
  }
}
