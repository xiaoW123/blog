import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { NavigationWarpper } from './style.js'
import data from '../../assets/data/schema.js'
import { useState } from 'react'
import contactQQ from '../../assets/image/blog/2023620215830.png'
import contactEmail from '@/assets/image/blog/2023620215841.png'
import { useNavigate } from 'react-router-dom'
const BlogNavigation = memo((props) => {
  const [index, setIndex] = useState(0)
  const { navigatorTitle } = data
  const navigate = useNavigate()

  console.log(navigatorTitle)
  function navigatorTitleClick(i, path) {
    navigate(path)
    setIndex(i)
  }

  return (
    <NavigationWarpper>
      <div className="navigationBox">
        <div className="navigation_title">
          {navigatorTitle?.map((item, i) => {
            return (
              <span
                className={index === i ? 'span_active' : ''}
                onClick={() => navigatorTitleClick(i, item.path)}
                key={item.id}
              >
                {item.title}
              </span>
            )
          })}
        </div>
        <div className="contact">
          <span className="contact_qq">
            <img src={contactQQ} alt="" />
          </span>
          <span className="contact_email">
            <img src={contactEmail} alt="" />
          </span>
        </div>
      </div>
    </NavigationWarpper>
  )
})

BlogNavigation.propTypes = {}

export default BlogNavigation
