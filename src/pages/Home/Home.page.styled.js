import styled from 'styled-components'
import onlineshopImage from '../../assets/onlineshop.jpg'

export const StyledHomeDiv = styled.div`
  background-image: url(${onlineshopImage});
  background-size: cover;
  background-position: center;
  min-height: 80vh;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  border-radius: 60px;
`
