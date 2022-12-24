import backgroundImage from '../../../assets/images/welcomeBackground.jpg'
import { commonShadow } from '../../../styles/app-theme/custom-shadows'

const gradient = 'radial-gradient(ellipse at top, rgba(192, 229, 228, 0.4), transparent 80%'
const btn = {
  padding: '15px 40px',
  boxShadow: commonShadow,
  textTransform: 'none',
  marginRight: '20px'
}

export const styles = {
  container: {
    flexDirection: 'column',
    alignItems: 'start',
    padding: '0 100px',
    minHeight: {
      md: '670px',
      sm: '319px',
      xs: '404px'
    },
    backgroundImage: {
      width: '100%',
      height: '100%',
      md: `url(${backgroundImage}), ${gradient})`,
      sm: `url(${backgroundImage}), ${gradient})`,
      xs: `url(${backgroundImage}), ${gradient})`
    },
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  title: {
    typography: {
      md: 'h3',
      sm: 'h3',
      xs: 'h4'
    },
    px: '24px',
    maxWidth: '450px',
    marginBottom: '32px',
    color: 'basic.white',
    textAlign: 'left'
  },
  buttonsContainer: {
    display: 'flex'
  },
  learnMoreBtn: {
    ...btn
  },
  getStartBtn: {
    ...btn,
    '&:hover': {
      backgroundColor: 'primary.200'
    }
  }
}
