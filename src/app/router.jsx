import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home/Home'))
const Component = lazy(() => import('../pages/Component/Component'))
const Categories = lazy(() => import('../pages/Categories/Categories'))
const Compare = lazy(() => import('../pages/Compare/Compare'))
const Search = lazy(() => import('../pages/Search/Search'))
const Bookmarks = lazy(() => import('../pages/Bookmarks/Bookmarks'))
const Calculator = lazy(() => import('../pages/Calculator/Calculator'))
const About = lazy(() => import('../pages/About/About'))
const Settings = lazy(() => import('../pages/Settings/Settings'))
const NotFound = lazy(() => import('../pages/NotFound/NotFound'))

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/component/:id" element={<Component />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:category" element={<Categories />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/compare/:id1/:id2" element={<Compare />} />
      <Route path="/search" element={<Search />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/calculator/:type" element={<Calculator />} />
      <Route path="/about" element={<About />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
