import './App.css'
import { Routes, Route } from 'react-router-dom'
import UserLogin from './Pages/userLogin/userLogin'
import UserProfile from './Pages/userProfile/userProfile'
import NotFound from './Pages/notFound/notFound'
import NewsFeed from './Pages/newsFeed/newsFeed'

function App() {


  return (
    <main className={"mainpanel maincontainer"}>
      <Routes>
        <Route path='/feed' element={<NewsFeed />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/profile' element={<UserProfile />} />
      </Routes>
    </main>
  )
}

export default App
