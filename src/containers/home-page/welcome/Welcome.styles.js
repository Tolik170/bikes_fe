import backgroundImage from '~/assets/images/welcomeBackground1.jpg'
import { commonShadow } from '~/styles/app-theme/custom-shadows'

const btn = {
  padding: { xs: '10px 20px', sm: '15px 40px' },
  boxShadow: commonShadow,
  backgroundColor: 'basic.black',
}

export const styles = {
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    pt: '50px',
    minHeight: {
      md: '800px',
      sm: '500px',
      xs: '400px'
    },
    backgroundImage: {
      maxWidth: '1650px',
      width: '100%',
      md: `url(${backgroundImage})`,
      sm: `url(${backgroundImage})`,
      xs: `url(${backgroundImage})`
    },
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  titleWithDescription: {
    container: {
      textAlign: 'center',
      mb: '10px',
    },
    title: {
      typography: 'body2',
      color: 'basic.white',
    },
    description: {
      typography: { xs: 'h5', sm: 'h3' },
      color: 'basic.white'
    }
  },
  buttonsContainer: {
    display: 'flex',
    columnGap: '20px'
  },
  learnMoreBtn: {
    ...btn,
    border: '1px solid white',
    '&:hover': {
      backgroundColor: 'basic.black'
    }
  },
  getStartBtn: {
    ...btn,
    backgroundColor: 'basic.white',
    '&:hover': {
      backgroundColor: 'basic.grey'
    }
  }
}
