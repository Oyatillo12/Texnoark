import {LoginPage, RegisterPage} from '../pages'
import { Route, Routes } from 'react-router-dom'

const CustomRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default CustomRoutes
