import { axiosClient } from '~/plugins/axiosClient'
import { URL } from '~/constants/requests'

export const orderService = {
  createOrder: (data) => {
    return axiosClient.post(URL.orders.get, data)
  }
}
