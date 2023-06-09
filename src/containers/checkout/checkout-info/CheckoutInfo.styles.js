import palette from '~/styles/app-theme/app.pallete'

export const styles = {
  container: {
    backgroundColor: 'basic.white',
    maxWidth: '600px',
    width: '100%',
    borderRadius: '10px',
    p: '40px 60px',
    maxHeight: '485px'
  },
  title: { typography: 'h5', mb: '30px' },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  },
  productInfo: {
    display: 'grid',
    gridTemplateColumns: {
      //   xs: 'repeat(1, 1fr)',
      sm: 'repeat(2, max-content)',
      md: 'repeat(3, max-content)'
    },
    columnGap: '30px'
  },
  img: { maxWidth: '150px' },
  name: { typography: 'body1', fontWeight: '500' },
  titleWithDescription: {
    container: { display: 'flex', columnGap: '5px', color: 'primary.600' }
  },
  price: { color: 'primary.700', fontWeight: '600' },
  productsInfo: {
    display: 'flex',
    flexDirection: 'column',
    rowGap: '30px',
    maxHeight: '240px',
    overflow: 'auto',
  },
  borderLine: { borderTop: `1px solid ${palette.primary[200]}` },
  totalAndBtn: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: '70px'
  },
  totalPrice: {
    container: { display: 'flex', columnGap: '10px' },
    title: { typography: 'midTitle' },
    description: { color: 'primary.600', typography: 'subtitle1', fontWeight: '500' }
  }
}
