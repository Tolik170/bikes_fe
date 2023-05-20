export const styles = {
  selectField: {
    minWidth: '115px'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    '& .MuiInputBase-input': {
      color: 'primary.700',
      padding: '12.5px 14px',
    }
  },
  title: { 
    color: 'primary.700', 
    mr: '8px', 
    minWidth: '65px',
    typography: 'body1',
    fontWeight: '500', 
  },
  formControl: {
    '& label': {
      lineHeight: 'inherit',
      color: 'primary.500'
    }
  }
}
