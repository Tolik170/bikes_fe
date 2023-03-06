import { commonShadow, commonHoverShadow } from '../../../styles/app-theme/custom-shadows'

export const styles = {
  container: {
    backgroundColor: 'lightBackgroundColor',
    display: 'block',
    textAlign: 'center',
    p: '35px 40px'
  },
  sectionTitle: {
    typography: { sm: 'h4', xs: 'h5' },
    color: 'primary.900'
  },
  cardsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    m: '50px 0 70px 0'
  },
  cardWrapper: {
    backgroundColor: 'basic.white',
    boxShadow: commonShadow,
    m: '0 auto',
    width: '100%',
    maxWidth: '340px',
    p: '20px 30px 0px 30px',
    '&:hover': {
      boxShadow: commonHoverShadow,
      cursor: 'pointer',
      transform: 'scale(1.05, 1.05)'
    }
  },
  cardImg: {
    width: '100%',
    maxHeight: '300px'
  },
  cardTitle: {
    typography: 'h6',
    mt: '25px',
    textAlign: 'left',
    color: 'primary.900'
  },
  cardDescription: {
    typography: 'subtitle1',
    textAlign: 'left',
    color: 'primary.900'
  }
}
