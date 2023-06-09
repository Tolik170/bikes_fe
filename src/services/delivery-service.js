import { axiosClient } from '~/plugins/axiosClient'
import { URL } from '~/constants/requests'

export const deliveryService = {
  getCities: (params) => {
    return axiosClient.get(`${URL.delivery.get}/cities`, { params })
  },
  getWarehouses: (params) => {
    return axiosClient.get(`${URL.delivery.get}/warehouses`, { params })
  }
}
