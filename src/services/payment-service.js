import { axiosClient } from '~/plugins/axiosClient'
import { URL } from '~/constants/requests'

export const paymentService = {
  getFondyCheckout: (params) => {
    return axiosClient.get(`${URL.payment.get}/checkout`, { params })
  }
}
