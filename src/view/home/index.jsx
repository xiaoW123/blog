import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeWarpper } from './style'
import HomeHeader from './components/home-header'
import HomeSwiper from './components/home-swiper'
import HomeFoot from './components/home-foot'

const Home = memo((props) => {
  return (
    <HomeWarpper>
      {/* 头部信息 */}
      <HomeHeader />
      {/* 轮播 */}
      <HomeSwiper />
      {/* 底部信息 */}
      <HomeFoot />
    </HomeWarpper>
  )
})

Home.propTypes = {}

export default Home
