import styled from 'styled-components'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

export const StyledNavBar = styled.nav`
  background-color: #63e6be;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  justify-content: space-between;
  padding: 1rem 1.5rem;

  h3 {
    color: #fff;
  }
`

export const StyledLinkShoppingCart = styled(Link)`
  text-decoration: none;
  position: relative;
  span {
    font-size: 14px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-75%, -70%);
    background-color: #0ca678;
    color: #fff;
    padding: 0 5px;
    border-radius: 50%;
  }
`

export const StyledShoppingCart = styled(FaShoppingCart)`
  font-size: 3rem;
  color: #fff;
`

export const StyledNavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`

export const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem;
  transition: color 0.3s;

  &:hover {
    background-color: #fff;
    color: #63e6be;
    border-radius: 0.5rem;
  }
`
