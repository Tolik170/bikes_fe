import { axiosClient } from '~/plugins/axiosClient'
import { URL } from '~/constants/requests'


export const bikesService = {
  getBikes: (params) => {
    return axiosClient.get(URL.bikes.get, { params })
  },
  getBikeById: (id) => {
    return axiosClient.get(`${URL.bikes.get}/${id}`)
  }
}
