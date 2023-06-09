export const routesPath = {
  home: { route: '/', nested: '//' },
  catalog: { route: '/catalog' },
  navBar: {
    mountainBikes: { label: 'mountainBikes', route: '/catalog?category=Mountain' },
    roadBikes: { label: 'roadBikes', route: '/catalog?category=Road' },
    electricBikes: { label: 'electricBikes', route: '/catalog?category=Electric' },
  },
  bikeDetails: { route: 'bike-details/:id', path: '/bike-details' },
  privacyPolicy: { route: '/privacy-policy' },
  checkout: { route: '/checkout' }
}
