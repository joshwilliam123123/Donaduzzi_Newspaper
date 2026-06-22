import './App.css'
//pages
import UserRegister from './Pages/userRegister/userRegister'
import UserLogin from './Pages/userLogin/userLogin'
import UserProfile from './Pages/userProfile/userProfile'
import UserConfig from './Pages/userConfig/userConfig.jsx'

import NotFound from './Pages/notFound/notFound'
import NewsFeed from './Pages/newsFeed/newsFeed'
//components

import { Routes, Route } from 'react-router-dom'
import InputField from './Components/log/inputField'
import HeaderComp from './Components/header/header.jsx'
//hooks
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'

function App() {

  const [headerVisibility,setVisibility] = useState(true)

  const location = useLocation()

  const blacklistedHeaderRoutes = [
    '/login',
    '/register',
  ]

  useEffect(()=>{
    setVisibility(!blacklistedHeaderRoutes.some(item=>item ==location.pathname ))
  },[location])

  return (
    <main className="mainpanel maincontainer">
      <header>
        {headerVisibility && <HeaderComp/>}
      </header>
      <Routes>
        <Route path='/feed' element={<NewsFeed />} />
        <Route path='/register' element={<UserRegister
          Field={InputField} />} />
        <Route path='/login' element={<UserLogin
          Field={InputField} />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/config' element={<UserConfig />} />
      </Routes>
    </main>
  )
}

export default App
