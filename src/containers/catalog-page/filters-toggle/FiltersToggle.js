import { useTranslation } from 'react-i18next'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FilterListIcon from '@mui/icons-material/FilterList'

import { styles } from './FiltersToggle.styles'

const FiltersToggle = ({ chosenFiltersQty = 0, handleToggle }) => {
  const { t } = useTranslation()

  const filterQuantity = chosenFiltersQty && (
    <Typography sx={ styles.chosenFiltersQty } variant='subtitle2'>
      { chosenFiltersQty }
    </Typography>
  )

  return (
    <Box onClick={ handleToggle } sx={ styles.container }>
      <Box sx={ styles.cursorContainer(Boolean(handleToggle)) }>
        <FilterListIcon sx={ styles.icon } />

        <Typography sx={ styles.title } variant='h6'>
          { t('catalogPage.filters.title') }
        </Typography>
      </Box>

      { filterQuantity }
    </Box>
  )
}

export default FiltersToggle
