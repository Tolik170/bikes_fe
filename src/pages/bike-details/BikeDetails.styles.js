import palette from '~/styles/app-theme/app.pallete'

export const styles = {
  container: {
    my: '50px'
  },
  imgWithInfo: {
    display: 'flex',
    flex: 0,
    columnGap: '30px'
  },
  carousel: {
    borderRadius: '10px',
    maxWidth: '800px',
    width: '100%'
  },
  img: {
    width: '100%',
    p: '30px 35px',
    backgroundColor: 'basic.lightGrey'
  },
  dotStyles: (isDesktop) => ({
    display: isDesktop ? 'none' : 'block'
  }),
  arrowButton: {
    display: { xs: 'none', md: 'inline-flex' },
    stroke: palette.primary[500],
    strokeWidth: 2
  },
  info: {
    width: '100%',
    minWidth: '252px',
    maxWidth: '310px'
  },
  titleWithDescription: {
    container: { textAlign: 'left', mb: '10px' },
    title: { typography: 'h5', mb: '10px' },
    description: { typography: 'h5', color: 'primary.500', fontWeight: '400' }
  },
  rating: {
    stars: { '& .MuiRating-icon': { mx: '1px' } }
  },
  sizeTitle: {
    typography: 'body1',
    color: 'primary.900',
    fontWeight: 500,
    my: '10px'
  },
  sizeToggleGroup: {
    display: 'grid',
    gridTemplateColumns: {
      sm: 'repeat(2, minmax(20px, 1fr))',
      md: 'repeat(3, minmax(20px, 1fr))'
    },
    gridAutoRows: '30px',
    gap: '10px'
  },
  sizeToggle: {
    typography: 'body2',
    color: 'primary.900',
    outline: `1px solid ${palette.primary[500]}`,
    borderRadius: 0,
    '&:focus': {
      outline: `2px solid ${palette.primary[900]}`
    }
  },
  sizeGuideContainer: {
    display: 'flex', 
    mt: '10px' 
  },
  sizeGuide: {
    textDecoration: 'underline',
    mr: '5px',
    typography: 'body1',
    color: 'primary.900',
    fontWeight: 500,
    cursor: 'pointer'
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
    position: 'sticky',
    top: '100%'
  },
  cardWrapper: {
    borderRadius: '10px',
    boxShadow: 'none',
    border: '1px solid',
    backgroundColor: 'backgroundColor',
    borderColor: 'primary.200',
    p: { xs: '16px 20px', sm: '35px 60px' },
    mt: '50px'
  }
}
