import styled from 'styled-components'
export const HomeHeaderWarpper = styled.div`
  .home_header {
    width: 100%;
    height: 160px;
    margin: 60px 0;
    /* overflow: hidden; */
    display: flex;

    .header_photo {
      box-sizing: border-box;
      width: 160px;
      height: 100%;
      border-radius: 16px;
      padding: 2px;
      background-color: ${(props) => props.theme.color.bgColor};
      img {
        border-radius: 16px;
        width: 100%;
        height: 100%;
      }
    }
    .header_info {
      overflow: hidden;
      margin-left: 30px;
      .header_info_h1 {
        margin: 0;
        font-weight: 400;
        span {
          font-weight: 600;
          color: ${(props) => props.theme.color.navigationFontColor};
        }
      }
    }
    .header_info_tag {
      box-sizing: border-box;
      padding-top: 10px;
      height: 31px;
      margin-top: 10px;
      margin-bottom: 20px;
      overflow: hidden;
      p {
        font-size: 16px;
        color: ${(props) => props.theme.color.fontColorA};
      }
      .adm-swiper-item {
        height: 31px;
      }
    }
    .header_info_social {
      box-sizing: border-box;
      p {
        font-size: 14px;
        color: ${(props) => props.theme.color.fontColorA};
      }
      .header_info_social_item {
        margin-top: 13px;
        width: 100%;
        height: 40px;
        display: flex;
        /* background-color: red; */
        div {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: pink;
          margin-left: 15px;
        }
      }
    }
  }
`
