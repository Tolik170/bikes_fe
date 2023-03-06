import { axiosClient } from '../plugins/axiosClient'
import { URL } from '../constants/requests'


export const bikesService = {
  getBikes: () => {
    console.log('d')
    return axiosClient.get(URL.bikes.get)
  }
}
