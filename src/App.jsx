import './App.css'
//pages
import UserRegister from './Pages/userRegister/userRegister'
import UserLogin from './Pages/userLogin/userLogin'
import UserProfile from './Pages/userProfile/userProfile'
import UserConfig from './Pages/userConfig/userConfig.jsx'

import NotFound from './Pages/notFound/notFound'
import NewsFeed from './Pages/newsFeed/newsFeed'
//components
import api from '../src/utils/api.js';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'
import InputField from './Components/log/inputField'
import HeaderComp from './Components/header/header.jsx'
//hooks
import { useCookies } from 'react-cookie';
import { createContext, useContext } from 'react'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'

export const UserContext = createContext(null)

function App() {

  const [headerVisibility, setVisibility] = useState(true)
 
  const location = useLocation()
  const [userInfo, setUserInfo] = useState()
  const [cookies] = useCookies(['token'])

  const blacklistedHeaderRoutes = [
    '/login',
    '/register',
  ]
  const assignUser = async () => {

    const res = await api.get('/user', {
      headers: {
        Authorization: `Bearer ${cookies.token}`
      }
    })

    setUserInfo(res.data)
    console.log(res.data)
  }
  useEffect(()=>{
    if (cookies.token) {
      assignUser()
    }else {
      console.log("not logged")
    }
    
  },[cookies.token])
  useEffect(() => {
    setVisibility(!blacklistedHeaderRoutes.some(item => item == location.pathname))
  }, [location.pathname])

  return (
    <main className="mainpanel maincontainer">
      <UserContext value={userInfo}>
        <header className='fixed w-full top-0 z-20'>
          {headerVisibility && <HeaderComp />}
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
      </UserContext>

    </main>
  )
}

export default App
