import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledDiv = styled.div`
  text-align: center;
  h2 {
    margin-bottom: 40px;
  }
`

export const StyledDivCart = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const StyledDivProducts = styled.div`
  max-width: 80%;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  gap: 80px;
  background-color: #63e6be;
  border-radius: 20px;
`

export const StyledLink = styled(Link)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  text-decoration: none;
  color: white;
  width: 300px;

  &:hover {
    color: #0ca678;
  }
`

export const StyledButton = styled.button`
  background-color: #f03e3e;
  color: #ffffff;
  border: none;
  padding: 8px 15px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
`
