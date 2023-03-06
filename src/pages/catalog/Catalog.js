import { useCallback } from 'react'
import Container from '@mui/material/Container'

import { bikesService } from '../../services/bikes-service'

import ProductList from '../../containers/catalog/ProductList'
import useAxios from '../../hooks/use-axios'

const Catalog = () => {
  const getBikes = useCallback(() => bikesService.getBikes(), [])

  const { response: bikes, loading } = useAxios({ service: getBikes })

  console.log(bikes)

  return (
    <Container>
      <ProductList />
    </Container>
  )
}

export default Catalog
