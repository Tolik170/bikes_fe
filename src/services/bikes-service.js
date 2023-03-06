import { axiosClient } from '../plugins/axiosClient'
import { URL } from '../constants/requests'


export const bikesService = {
  getBikes: () => {
    return axiosClient.get(URL.bikes.get)
  }
}
