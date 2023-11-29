import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledBreadCrumbs = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  div {
    margin-right: 5px;

    span {
      margin-left: 10px;
      color: #000;
    }
    &:last-child {
      span {
        display: none;
      }
    }
  }
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #0b7285;
`
