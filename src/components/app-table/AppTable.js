import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

const AppTable = ({ headCells, bodyRows, ...props }) => {

  return (
    <TableContainer>
      <Table { ...props }>
        <TableHead>
          <TableRow>
            { headCells }
          </TableRow>
        </TableHead>

        <TableBody>
          { bodyRows }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default AppTable
