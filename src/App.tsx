import { useContext } from 'react';
import './App.css'
import CustomRoutes from './routes/CustomRoutes'
import DashboardRoutes from './routes/DashboardRoutes';
import { Context } from './context/AuthContext';

function App() {
  const {accessToken} = useContext(Context)

  if (accessToken) {
    return (
      <div className="App">
        <DashboardRoutes />
      </div>
    )
  }
  else {
    return (
      <div className="App">
        <CustomRoutes />
      </div>
    )
  }
}


export default App
