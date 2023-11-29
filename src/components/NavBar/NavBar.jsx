import { NavLink } from 'react-router-dom'
import {
  StyledLinkShoppingCart,
  StyledNavBar,
  StyledNavItems,
  StyledNavLink,
  StyledShoppingCart,
} from './NavBar.styled'
import { useCart } from '../../context/CartContext'

const NavBar = () => {
  const { cart } = useCart()
  return (
    <StyledNavBar className="StyledNavBar">
      <NavLink to="/" style={{ textDecoration: 'none' }}>
        <h3>Online Shop</h3>
      </NavLink>
      <StyledNavItems className="StyledNavItems">
        <StyledNavLink className="StyledNavLink" to="/">
          Home
        </StyledNavLink>
        <StyledNavLink className="StyledNavLink" to="/products">
          Products
        </StyledNavLink>
        <StyledLinkShoppingCart className="StyledLinkShoppingCart" to="/cart">
          <StyledShoppingCart />
          {cart.length > 0 && (
            <span style={{ marginLeft: '10px' }}>{cart.length}</span>
          )}
        </StyledLinkShoppingCart>
      </StyledNavItems>
    </StyledNavBar>
  )
}
export default NavBar
