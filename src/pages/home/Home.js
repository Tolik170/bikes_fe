import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import FeatureBlock from '../../containers/home-page/feature-block/FeatureBlock'
import PopularItems from '../../containers/home-page/popular-items/PopularItems'
import Welcome from '../../containers/home-page/welcome/Welcome'

import { descriptionTimes } from '../../components/accordion-with-image/accordion-with-image.constants'
import VideoBox from '../../components/video-box/VideoBox'

const Home = () => {
  return (
    <Box>
      <Welcome />
      <Container>
        <FeatureBlock items={ descriptionTimes } />
        <VideoBox />
        <PopularItems />
      </Container>
    </Box>
  )
}

export default Home
