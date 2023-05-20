export const styles = {
  root: (open) => ({
    maxWidth: '280px',
    color: 'primary.700',
    whiteSpace: 'nowrap',
    py: { xs: '2px', sm: 0 },
    pr: { xs: 0, sm: open ? '40px' : 0 },
    width: open ? 'auto' : 0,
    overflow: open ? 'visible' : 'hidden',
    opacity: open ? 1 : 0,
    transition: 'all 0.3s',
    transformOrigin: 'left'
  }),
  select: {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      rowGap: '10px'
    },
    title: {
      typography: 'midTitle'
    }
  }
}
