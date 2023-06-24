import styled from 'styled-components'

export const AppWarpper = styled.div`
  .appSize {
    box-sizing: border-box;
    width: 1190px;
    margin: 100px auto;
    padding: 0 80px;
    border-radius: 16px;
    background-color: ${(props) => props.theme.color.bgColor};
  }
`
