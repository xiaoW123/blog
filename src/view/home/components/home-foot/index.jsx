import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeFootWarpper } from './style'

const HomeFoot = memo((props) => {
  return (
    <HomeFootWarpper>
      <div className="home_foot_box">
        <p>赣南科技学院物联网工程专业 / 互联网游民 / 冰红茶再来一瓶</p>
        <p>QQ邮箱：1714301573@qq.com</p>
        <p>Copyright © 2023 xiaoW</p>
      </div>
    </HomeFootWarpper>
  )
})

HomeFoot.propTypes = {}

export default HomeFoot
