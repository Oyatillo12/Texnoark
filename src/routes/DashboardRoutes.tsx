import {Dashboard} from '../pages'
import { Route, Routes } from 'react-router-dom'

const DashboardRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
    </Routes>
  )
}

export default DashboardRoutes
