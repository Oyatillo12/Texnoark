import { Category, Dashboard } from '../pages'
import { Route, Routes } from 'react-router-dom'

const DashboardRoutes = () => {
  return (
    <div className='h-[100vh] overflow-y-auto w-[80%]'>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/categories" element={<Category />} />
      </Routes>
    </div>
  )
}

export default DashboardRoutes
