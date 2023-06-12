import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import { orderService } from '~/services/order-service'
import { paymentService } from '~/services/payment-service'
import { useCart } from '~/hooks/use-cart'
import useAxios from '~/hooks/use-axios'
import useForm from '~/hooks/use-form'
import CheckoutForm from '~/containers/checkout/checkout-form/CheckoutForm'
import CheckoutInfo from '~/containers/checkout/checkout-info/CheckoutInfo'
import TitleWithDescription from '~/components/title-with-description/TitleWithDescription'

import { createOrderData, isObjectEmpty } from '~/utils/helper-functions'
import { checkoutValidations, initialValues } from '~/utils/validations/checkout'
import { routesPath } from '~/routes/routesPath'
import { styles } from '~/pages/checkout/Checkout.styles'

const Checkout = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { cartItems, cartOperations } = useCart()
  const { getTotalPrice, clearCart } = cartOperations

  const createOrder = useCallback((data) => orderService.createOrder(data), [])
  const getFondyCheckout = useCallback((params) => paymentService.getFondyCheckout(params), [])

  const { loading: orderLoading, fetchData: createNewOrder } = useAxios({
    service: createOrder,
    fetchOnMount: false
  })

  const { loading: paymentLoading, fetchData: getPaymentCheckout } = useAxios({
    service: getFondyCheckout,
    fetchOnMount: false
  })

  const onSubmit = async () => {
    const createdOrder = await createNewOrder(createOrderData(data, getTotalPrice(), cartItems))

    if (createdOrder && !isObjectEmpty(createdOrder.data)) {
      const paymentCheckout = await getPaymentCheckout({
        orderId: createdOrder.data._id,
        amount: getTotalPrice() * 100
      })

      if (paymentCheckout.data.checkout_url) {
        navigate(routesPath.catalog.route)
        window.open(paymentCheckout.data.checkout_url)
        clearCart()
      }
    }
  }

  const { handleSubmit, handleInputChange, handleNonInputValueChange, handleBlur, data, errors } = useForm({
    onSubmit,
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
        <CheckoutInfo getTotalPrice={ getTotalPrice } items={ cartItems } loading={ orderLoading || paymentLoading } />
      </Box>
    </Container>
  )
}

export default Checkout
