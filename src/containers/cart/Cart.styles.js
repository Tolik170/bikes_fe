import palette from '~/styles/app-theme/app.pallete'

export const styles = {
  container: { p: '25px' },
  table: { minWidth: 850 },
  title: { typography: 'h5', display: 'block', textAlign: 'center', mb: '25px' },
  headCells: { typography: 'midTitle' },
  bodyRow: { borderTop: `1px solid ${palette.primary[200]}` },
  tableCell: { typography: 'body1' },
  imgCell: { maxWidth: '150px', minHeight: '104px' },
  priceCell: { minWidth: '112px' },
  nameCell: { textDecoration: 'none', color: 'primary.900', fontWeight: 500 },
  actionCellText: { cursor: 'pointer', color: 'primary.600' },
  quantity: { maxWidth: '70px', width: '100%' },
  totalAndBtn: {
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: `2px solid ${palette.primary[700]}`,
    pt: '20px'
  },
  TotalAndBtn: { display: 'flex', justifyContent: 'space-between' },
  totalPrice: {
    container: { display: { sm: 'flex' }, columnGap: '15px' },
    title: { typography: 'midTitle' },
    description: { color: 'primary.600', typography: 'subtitle1' }
  }
}
