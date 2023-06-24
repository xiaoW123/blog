import propsTypes from 'prop-types'
import React, { memo, useState } from 'react'
import classNames from 'classnames'
import { ListWarpper } from './style'

const List = memo((props) => {
  const { swiperRef, current, total } = props
  const [index, setIndex] = useState(0)
  return (
    <ListWarpper>
      <div className="swiper_list">
        {/* {`${current + 1} / ${total}`} */}
        <div
          className="swiper_list_item"
          onClick={() => {
            swiperRef.current.swipeTo(0)
            setIndex(current)
          }}
        >
          <div
            className={classNames('zz', {
              active: current === 0
            })}
          ></div>
          <p></p>
        </div>
        <div
          className="swiper_list_item"
          onClick={() => {
            swiperRef.current.swipeTo(1)
            setIndex(current)
          }}
        >
          <div
            className={classNames('zz', {
              active: current === 1
            })}
          ></div>
          <p></p>
        </div>
        <div
          className="swiper_list_item"
          onClick={() => {
            swiperRef.current.swipeTo(2)
            setIndex(current)
          }}
        >
          <div
            className={classNames('zz', {
              active: current === 2
            })}
          ></div>
          <p></p>
        </div>
        <div
          className="swiper_list_item"
          onClick={() => {
            swiperRef.current.swipeTo(3)
            setIndex(current)
          }}
        >
          <div
            className={classNames('zz', {
              active: current === 3
            })}
          ></div>
          <p></p>
        </div>
        <div
          className="swiper_list_item"
          onClick={() => {
            swiperRef.current.swipeTo(4)
            setIndex(current)
          }}
        >
          <div
            className={classNames('zz', {
              active: current === 4
            })}
          ></div>
          <p></p>
        </div>
      </div>
    </ListWarpper>
  )
})
List.propsTypes = {}
export default List
