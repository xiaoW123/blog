import styled from 'styled-components'
export const ListWarpper = styled.div`
  .swiper_list {
    position: absolute;
    left: 50%;
    bottom: 20px;
    transform: translateX(-50%);
    display: flex;
    z-index: 999;
    .swiper_list_item {
      position: relative;
      width: 28px;
      height: 28px;
      margin: 0 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        opacity: 0.8;
        width: 14px;
        height: 2px;
        background-color: #fff;
        z-index: 999;
      }
      &:hover .zz {
        position: absolute;
        top: 0;
        left: 0;
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-color: #fff;
        opacity: 0.2;
      }
    }
  }
`
