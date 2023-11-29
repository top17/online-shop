import styled from 'styled-components'

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  background-color: #63e6be;
  padding: 15px;
  border-radius: 40px;
`

export const StyledDivInput = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  label {
    font-weight: 500;
    display: flex;
    gap: 10px;
    align-items: center;
  }

  select {
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 6px;
  }
`

export const StyledDivContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
`

export const StyledDivBox = styled.div`
  width: 100%;

  padding: 1rem;
  cursor: pointer;
`
export const StyledDivText = styled.div`
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  margin-bottom: 1rem;
  margin-top: 1rem;
  &:hover {
    background-color: #fff;
    border-radius: 0.5rem;
  }
`

export const StyledDivInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-weight: 600;
  margin-bottom: 1rem;
  margin-top: 1rem;
`

export const StyledImg = styled.img`
  width: 100%;
  height: 14rem;
`

export const StyledButton = styled.button`
  background-color: #0ca678;
  color: #ffffff;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #fff;
    color: #0ca678;
  }
`

export const StyledAlertContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  width: 300px;
`
