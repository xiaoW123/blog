import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeHeaderWarpper } from './style'
import { Swiper } from 'antd-mobile'

import headerPhoto from '@/assets/image/blog/favicon.png'
import wx from '@/assets/image/blog/2023620215733.png'
import github from '@/assets/image/blog/202362021546.png'
import zh from '@/assets/image/blog/2023623151331.png'
const HomeHeader = memo((props) => {
  return (
    <HomeHeaderWarpper>
      <div className="home_header">
        <div className="header_photo">
          <img src={headerPhoto} alt="" />
        </div>
        <div className="header_info">
          <h1 className="header_info_h1">
            Hello,欢迎来到&nbsp;<span>xiaoW-Blog</span>
          </h1>
          <div className="header_info_tag">
            <Swiper
              loop
              autoplay
              direction="vertical"
              style={{ '--height': '31px' }}
              indicator={() => null}
            >
              <Swiper.Item>
                <p>心之所向，身之所往，价值所在。</p>
              </Swiper.Item>
              <Swiper.Item>
                <p>互联网时代，没有自己的网站意味着你在这个世界上不存在。</p>
              </Swiper.Item>
            </Swiper>
          </div>
          <div className="header_info_social">
            <p>社交媒体</p>
            <div className="header_info_social_item">
              <div>
                <img src={wx} alt="微信" title="微信" />
              </div>
              <div>
                <a href="https://github.com/xiaoW123">
                  <img src={github} alt="Github" title="Github" />
                </a>
              </div>
              <div>
                <a href="https://www.zhihu.com/">
                  <img src={zh} alt="知乎" title="知乎" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeHeaderWarpper>
  )
})

HomeHeader.propTypes = {}

export default HomeHeader
