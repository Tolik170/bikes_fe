import { commonHoverShadow, commonShadow } from '../../styles/app-theme/custom-shadows'


export const styles = {
  cardWrapper: {
    backgroundColor: 'basic.white',
    boxShadow: commonShadow,
    m: '0 auto',
    width: '100%',
    maxWidth: '340px',
    p: '20px 30px 0px 30px',
    '&:hover': {
      boxShadow: commonHoverShadow,
      cursor: 'pointer'
    }
  },
  cardImgContainer: {
    display: 'flex',
    width: '100%'
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
