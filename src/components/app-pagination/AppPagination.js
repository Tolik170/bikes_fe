import Pagination from '@mui/material/Pagination'
import Box from '@mui/system/Box'

import { styles } from '~/components/app-pagination/AppPagination.styles'

const AppPagination = ({
  pageCount,
  page,
  sx,
  ...props
}) => {
  return pageCount > 1 ? (
    <Box sx={ { ...styles.wrapper, ...sx } }>
      <Pagination
        count={ pageCount }
        defaultPage={ 1 }
        page={ Number(page) }
        { ...props }
      />
    </Box>
  ) : null
}

export default AppPagination
