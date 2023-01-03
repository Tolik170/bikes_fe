import Box from '@mui/material/Box'
import PopularItems from '../../containers/home-page/popular-items/PopularItems'
import Welcome from '../../containers/home-page/welcome/Welcome'
// import ScrollBar from '../../components/scroll-bar';

const Home = () => {
  return (
    <Box>
      <Welcome />
      <Box sx={ { maxWidth: '1228px', margin: '0 auto', overflowX: 'hidden', color: '#000' } }>
        <PopularItems />
        { /* <SliderHomePage />
        <CategoriesList />
        <ConstructorPreview />
        <ModelsList />
        <OurLooks /> */ }
      </Box>
    </Box>
  )
}

export default Home
