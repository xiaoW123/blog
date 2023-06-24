import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { HomeSwiperWarpper } from './style'
import { Swiper, Button } from 'antd-mobile'
import item1 from '@/assets/image/blog/u16.png'
import item2 from '@/assets/image/blog/u20.png'
import item3 from '@/assets/image/blog/u24.png'
import item4 from '@/assets/image/blog/u28.png'
import item5 from '@/assets/image/blog/u32.png'
import List from './cpns/list'

const HomeSwiper = memo((props) => {
  const swiperRef = useRef()
  return (
    <HomeSwiperWarpper>
      <div className="home_swiper_box">
        <Swiper
          ref={swiperRef}
          autoplay
          loop
          indicator={(total, current) => (
            <List total={total} current={current} swiperRef={swiperRef} />
          )}
        >
          <Swiper.Item key={0}>
            <img src={item1} alt="" srcset="" />
            <div>
              <h1>我的世界</h1>
              <Button type="primary">开始阅读</Button>
            </div>
          </Swiper.Item>
          <Swiper.Item key={1}>
            <img src={item2} alt="" srcset="" />
            <div>
              <h1>斑斓气泡</h1>
              <Button type="primary">开始阅读</Button>
            </div>
          </Swiper.Item>
          <Swiper.Item key={2}>
            <img src={item3} alt="" srcset="" />
            <div>
              <h1>建筑几何态</h1>
              <Button type="primary">开始阅读</Button>
            </div>
          </Swiper.Item>
          <Swiper.Item key={3}>
            <img src={item4} alt="" srcset="" />
            <div>
              <h1>梦幻蒸汽波</h1>
              <Button type="primary">开始阅读</Button>
            </div>
          </Swiper.Item>
          <Swiper.Item key={4}>
            <img src={item5} alt="" srcset="" />
            <div>
              <h1>强烈碎片</h1>
              <Button type="primary">开始阅读</Button>
            </div>
          </Swiper.Item>
        </Swiper>
      </div>
    </HomeSwiperWarpper>
  )
})

HomeSwiper.propTypes = {}

export default HomeSwiper
