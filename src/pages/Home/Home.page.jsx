import { StyledNavLink } from '../../components/NavBar/NavBar.styled'
import { StyledHomeDiv } from './Home.page.styled'

const Home = () => {
  return (
    <StyledHomeDiv className="StyledHomeDiv">
      <h1>Welcome to Online Shop</h1>
      <StyledNavLink className="StyledNavLink" to="/products">
        Explore Products
      </StyledNavLink>
    </StyledHomeDiv>
  )
}

export default Home
