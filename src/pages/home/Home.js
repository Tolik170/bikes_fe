import Box from '@mui/material/Box'
import { descriptionTimes } from '../../components/accordion-with-image/accordion-with-image.constants'
import VideoBox from '../../components/video-box/VideoBox'
import FeatureBlock from '../../containers/home-page/feature-block/FeatureBlock'
import PopularItems from '../../containers/home-page/popular-items/PopularItems'
import Welcome from '../../containers/home-page/welcome/Welcome'
// import ScrollBar from '../../components/scroll-bar';

const Home = () => {
  return (
    <Box>
      <Welcome />
      <Box sx={ { maxWidth: '1228px', margin: '0 auto', overflowX: 'hidden', color: '#000' } }>
        <FeatureBlock items={ descriptionTimes } />
        <VideoBox />
        <PopularItems />
      </Box>
    </Box>
  )
}

export default Home
