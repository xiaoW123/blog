import styled from 'styled-components'
export const HomeFootWarpper = styled.div`
  margin: 0 -80px;
  .home_foot_box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.color.fontColorA};
    width: 100%;
    height: 158px;
    border-top: 1px solid #f2f2f2;
    p {
      line-height: 28px;
    }
  }
`
