import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home.page'
import NavBar from '../components/NavBar/NavBar'
import Products from '../pages/Products/Products.page'
import Description from '../pages/Description/Description.page'
import BreadCrumbs from '../components/BreadCrumbs/BreadCrumbs'
import Cart from '../pages/Cart/Cart'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Description />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <BreadCrumbs />
      <Router />
    </BrowserRouter>
  )
}
export default MainRoutes
