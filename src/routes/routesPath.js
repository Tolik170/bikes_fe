export const routesPath = {
  home: { route: '/', nested: '//' },
  catalog: { route: '/catalog' },
  navBar: {
    mountainBikes: { label: 'mountainBikes', route: '/#mountain-bikes' },
    roadBikes: { label: 'roadBikes', route: '/#road-bikes' },
    electricBikes: { label: 'electricBikes', route: '/#electric-bikes' },
  },
  bikeDetails: { route: 'bike-details/:id', path: '/bike-details' },
  privacyPolicy: { route: '/privacy-policy' }
}
