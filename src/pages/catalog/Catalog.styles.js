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
    container: { mb: '40px', textAlign: 'center' },
    title: { typography: { sm: 'h4', xs: 'h5' } },
    description: { typography: { sm: 'body1', xs: 'body2' }, color: 'primary.500' }
  },
  filterBarMenu: {
    display: 'flex', 
    justifyContent: { xs: 'center', sm: 'space-between' }, 
    mb: '20px', 
    px: '10px' 
  },
  content: { display: 'flex', columnGap: '20px', mb: '50px' },
  products: {
    display: 'grid',
    width: '100%',
    justifyItems: 'center',
    gridTemplateColumns: {
      sm: 'repeat(2, minmax(250px, 1fr))',
      md: 'repeat(2, minmax(290px, 1fr))',
      lg: 'repeat(3, minmax(290px, 1fr))'
    },
    gridAutoRows: 'min-content',
    gap: '15px'
  },
  cardWithLink: {
    container: { maxWidth: '100%' }, 
    img: { maxWidth: '400px' },
    titleWithDescription: {
      container: { textAlign: 'left' },
      title: { typography: 'h6', mt: '25px' },
      description: { typography: 'subtitle1', color: 'primary.700' }
    }
  }
}
