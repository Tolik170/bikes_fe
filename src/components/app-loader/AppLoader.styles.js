export const styles = {
  container: (pageLoad) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: pageLoad ? 1 : 0
  }),
  loader: {
    color: 'basic.black'
  }
}
