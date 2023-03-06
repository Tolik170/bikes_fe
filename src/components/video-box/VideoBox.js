import ReactPlayer from 'react-player/youtube'
import Box from '@mui/material/Box'

import { styles } from './VideoBox.styles'
import titleBar from '../../assets/images/video-box/title-bar.png'

const VideoBox = () => {
  return (
    <Box sx={ styles.container }>
      <Box
        alt='Title bar' component='img' src={ titleBar }
        sx={ styles.titleBar }
      />
      <Box sx={ styles.videoBg }>
        <ReactPlayer
          controls height='600px' /*url='https://www.youtube.com/watch?v=-FeGaFY7KTQ'*/
          width='100%'
        />
      </Box>
    </Box>
  )
}

export default VideoBox
