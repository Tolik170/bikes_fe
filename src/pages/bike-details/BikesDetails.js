import { useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { bikesService } from '~/services/bikes-service'
import useAxios from '~/hooks/use-axios'

import { errorRoutes } from '~/routes/errorRoutes'

const BikesDetails = () => {
  const { id = '' } = useParams()
  const navigate = useNavigate()

  const getBikeById = useCallback(() => bikesService.getBikeById(id), [id])
  const responseError = useCallback(() => navigate(errorRoutes.notFound.path), [navigate])

  const { response, loading } = useAxios({
    service: getBikeById,
    onResponseError: responseError
  })

  if (!loading) {
    console.log(response)
  }
  return <div>BikesDetails page</div>
}

export default BikesDetails
