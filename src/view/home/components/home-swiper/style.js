import styled from 'styled-components'
export const HomeSwiperWarpper = styled.div`
  margin-bottom: 80px;
  .home_swiper_box {
    width: 100%;
    height: 520px;
    border-radius: 16px;
    position: relative;
    .adm-swiper-item {
      position: relative;
      > div {
        position: absolute;
        left: 50px;
        bottom: 50px;
        h1 {
          font-size: 35px;
          font-weight: 400;
          color: #fff;
        }
        button {
          font-size: 12px !important;
          color: #fff;
          border-radius: 16px;
          background-color: #18251e;
          border: none;
        }
      }
      > img {
        border-radius: 16px;
      }
    }
  }

  .active {
    position: absolute;
    top: 0;
    left: 0;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: #fff;
    opacity: 0.2;
  }
`
