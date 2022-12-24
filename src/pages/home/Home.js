import Box from '@mui/material/Box'
import Welcome from '../../containers/home-page/welcome/Welcome'
// import ScrollBar from '../../components/scroll-bar';

const Home = () => {
  return (
    <Box>
      <Welcome />
      <Box sx={ { maxWidth: '1128px', margin: '0 auto', overflowX: 'hidden', color: '#000' } }>
        { /* <SliderHomePage />
        <CategoriesList />
        <ConstructorPreview />
        <ModelsList />
        <OurLooks /> */ }
        Hello
      </Box>
    </Box>
  )
}

export default Home
