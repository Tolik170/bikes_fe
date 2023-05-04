import { commonHoverShadow, commonShadow } from '../../styles/app-theme/custom-shadows'

export const styles = {
  container: (isClickable) => ({
    backgroundColor: 'basic.white',
    boxShadow: commonShadow,
    textDecoration: 'none',
    width: '100%',
    color: 'primary.900',
    maxWidth: '340px',
    p: '20px 30px',
    '&:hover': isClickable && {
      boxShadow: commonHoverShadow,
      cursor: 'pointer'
    }
  }),
  img: {
    width: '100%',
    maxHeight: '300px'
  },
}
