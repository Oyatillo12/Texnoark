import { useContext } from 'react';
import './App.css'
import CustomRoutes from './routes/LoginRoutes'
import DashboardRoutes from './routes/DashboardRoutes';
import { Context } from './context/AuthContext';
import Navbar from './components/Navbar';

function App() {
  const {accessToken} = useContext(Context)

  if (accessToken) {
    return (
      <div className="flex">
        <Navbar/>
        <DashboardRoutes />
      </div>
    )
  }
  else {
    return (
        <CustomRoutes />
    )
  }
}


export default App
