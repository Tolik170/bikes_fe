import { useCallback } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import { bikesService } from '~/services/bikes-service'
import useAxios from '~/hooks/use-axios'
import FeatureBlock from '~/containers/home-page/feature-block/FeatureBlock'
import PopularItems from '~/containers/home-page/popular-items/PopularItems'
import Welcome from '~/containers/home-page/welcome/Welcome'
import VideoBox from '~/components/video-box/VideoBox'

import { descriptionTimes } from '~/components/accordion-with-image/accordion-with-image.constants'

const Home = () => {
  const getBikes = useCallback(() => bikesService.getBikes({ limit: 3, sort: 'purchasedCount' }), [])

  const { response: bikesResponse } = useAxios({
    service: getBikes,
    defaultResponse: { count: 0, items: [] }
  })

  const { items: bikes } = bikesResponse

  return (
    <Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
      <Welcome />
      <Container>
        <FeatureBlock items={ descriptionTimes } />
        <VideoBox />
        <PopularItems items={ bikes } />
      </Container>
    </Box>
  )
}

export default Home
