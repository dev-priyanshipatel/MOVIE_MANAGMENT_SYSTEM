import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import SignUP from './pages/SignUP'
import Header from './components/Header'
import { Toaster } from 'react-hot-toast'
import Movies from './pages/Movies'
import AddMovie from './pages/AddMovie'
import EditMovie from './pages/EditMovie'
import ProtectedRoutes from './components/ProtectedRoutes'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUP />} />
          <Route path="/movies" element={<ProtectedRoutes><Movies/></ProtectedRoutes>} />
          <Route path='/add-movie' element={<ProtectedRoutes><AddMovie /></ProtectedRoutes>} />
          <Route path='/edit-movie/:id' element={<ProtectedRoutes><EditMovie /></ProtectedRoutes>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App