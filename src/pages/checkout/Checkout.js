import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import { useCart } from '~/hooks/use-cart'
import useForm from '~/hooks/use-form'
import CheckoutForm from '~/containers/checkout/checkout-form/CheckoutForm'
import CheckoutInfo from '~/containers/checkout/checkout-info/CheckoutInfo'
import TitleWithDescription from '~/components/title-with-description/TitleWithDescription'

import { checkoutValidations, initialValues } from '~/utils/validations/checkout'
import { styles } from '~/pages/checkout/Checkout.styles'

const Checkout = () => {
  const { t } = useTranslation()
  const { cartItems, cartOperations } = useCart()
  const { getTotalPrice } = cartOperations

  const { handleSubmit, handleInputChange, handleNonInputValueChange, handleBlur, data, errors } = useForm({
    onSubmit: async () => console.log(data),
    initialValues,
    validations: { ...checkoutValidations }
  })

  return (
    <Container component='form' onSubmit={ handleSubmit } sx={ styles.container }>
      <TitleWithDescription title={ t('checkout.title') } />
      <Box sx={ styles.content }>
        <CheckoutForm
          data={ data }
          errors={ errors }
          handleBlur={ handleBlur }
          handleInputChange={ handleInputChange }
          handleNonInputValueChange={ handleNonInputValueChange }
        />
        <CheckoutInfo getTotalPrice={ getTotalPrice } items={ cartItems } />
      </Box>
    </Container>
  )
}

export default Checkout
