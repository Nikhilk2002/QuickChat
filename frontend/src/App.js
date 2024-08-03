import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Chat from './Component/Chat/Chat'
import Contacts from './Component/Contacts/Contacts'
import Settings from './Component/Settings/Settings'
import Dashboard from './Component/Dashbord/Dashboard'
function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route index element={<Dashboard />} />
          <Route path="chats" element={<Chat/>} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="settings" element={<Settings />} />
     </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App