import { useRoutes } from 'react-router-dom'
import { AppWarpper } from './style'
import BlogNavigation from '@/components/blog-navigation/BlogNavigation'
import routes from '@/router/router.js'
import { Suspense } from 'react'

function App() {
  return (
    <AppWarpper>
      <div className="appSize">
        {/* 导航 */}
        <BlogNavigation />
        {/* 路由 */}
        <Suspense fallback="">
          <div>{useRoutes(routes)}</div>
        </Suspense>
      </div>
    </AppWarpper>
  )
}

export default App
