import styled from 'styled-components'
export const NavigationWarpper = styled.div`
  .navigationBox {
    width: 100%;
    height: 100px;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 -80px;
    padding: 0 80px;

    .navigation_title span {
      cursor: pointer;
      font-weight: 600;
      margin-right: 30px;
      font-size: 14px;
    }

    .contact {
      display: flex;
      .contact_qq,
      .contact_email {
        cursor: pointer;
        margin-right: 20px;
        display: block;
        width: 32px;
        height: 32px;
        background-color: red;
      }
      img {
      }
    }
  }
  .span_active {
    color: ${(props) => props.theme.color.navigationFontColor};
  }
`
