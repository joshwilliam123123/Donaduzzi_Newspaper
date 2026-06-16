import './App.css'
//pages
import UserRegister from './Pages/userRegister/userRegister'
import UserLogin from './Pages/userLogin/userLogin'
import UserProfile from './Pages/userProfile/userProfile'
import NotFound from './Pages/notFound/notFound'
import NewsFeed from './Pages/newsFeed/newsFeed'
//components
import { Routes, Route } from 'react-router-dom'
import HeaderComp from './Components/header/header'
import InputField from './Components/log/inputField'
import Sidebar from './Components/sidebar/sidebar'
//hooks
import { useLocation } from 'react-router-dom';

function App() {

  const location = useLocation()
  const sidebarLocations = [
    "/profile",
    "/login",
  ]
  var showingSidebar = sidebarLocations.some((i, _) => i === location.pathname)

  return (
    <main className={"mainpanel maincontainer"}>
      <header>
        <HeaderComp></HeaderComp>
      </header>
      {showingSidebar && <Sidebar />}
      <Routes>
        <Route path='/feed' element={<NewsFeed />} />
        <Route path='/register' element={<UserRegister
          Field={InputField} />} />
        <Route path='/login' element={<UserLogin
          Field={InputField} />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/profile' element={<UserProfile />} />
      </Routes>
    </main>
  )
}

export default App
