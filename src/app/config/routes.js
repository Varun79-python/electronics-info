const routes = [
  { path: '/', page: 'Home', label: 'Home' },
  { path: '/component/:id', page: 'Component', label: 'Component' },
  { path: '/categories', page: 'Categories', label: 'Categories' },
  { path: '/categories/:category', page: 'Categories', label: 'Category' },
  { path: '/compare', page: 'Compare', label: 'Compare' },
  { path: '/compare/:id1/:id2', page: 'Compare', label: 'Compare' },
  { path: '/search', page: 'Search', label: 'Search' },
  { path: '/bookmarks', page: 'Bookmarks', label: 'Bookmarks' },
  { path: '/calculator', page: 'Calculator', label: 'Calculator' },
  { path: '/calculator/:type', page: 'Calculator', label: 'Calculator' },
  { path: '/about', page: 'About', label: 'About' },
  { path: '/settings', page: 'Settings', label: 'Settings' },
  { path: '*', page: 'NotFound', label: 'Not Found' },
]

export default routes
