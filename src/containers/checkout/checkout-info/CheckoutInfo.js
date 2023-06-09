import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import AppButton from '~/components/app-button/AppButton'
import TitleWithDescription from '~/components/title-with-description/TitleWithDescription'

import { addCommas } from '~/utils/addCommas'
import { styles } from '~/containers/checkout/checkout-info/CheckoutInfo.styles'

const CheckoutInfo = ({ items, getTotalPrice }) => {
  const { t } = useTranslation()

  const bikeOptions = ['category', 'size', 'quantity']

  const infoBlock = (item) =>
    bikeOptions.map((option) => (
      <TitleWithDescription
        description={ item[option] } key={ option } sx={ styles.titleWithDescription }
        title={ option }
      />
    ))

  const productsInfo = items.map((item) => (
    <Box key={ item.name } sx={ styles.productInfo }>
      <Box component='img' src={ item.image } sx={ styles.img } />

      <Box>
        <Typography sx={ styles.name }>
          { item.name }
        </Typography>

        { infoBlock(item) }
      </Box>

      <Typography sx={ styles.price }>
        { `$ ${addCommas(item.price)}` }
      </Typography>
    </Box>
  ))

  return (
    <Box sx={ styles.container }>
      <Typography sx={ styles.title }>
        { t('checkout.info.title') }
      </Typography>

      <Box sx={ styles.content }>
        <Box sx={ styles.productsInfo }>
          { productsInfo }
        </Box>

        <Box sx={ styles.borderLine } />

        <Box sx={ styles.totalAndBtn }>
          <TitleWithDescription
            description={ `$ ${addCommas(getTotalPrice())}` }
            sx={ styles.totalPrice }
            title={ t('cart.total') }
          />

          <AppButton size='medium' type='submit' variant='containedLight'>
            { t('checkout.info.payment') }
          </AppButton>
        </Box>
      </Box>
    </Box>
  )
}

export default CheckoutInfo
