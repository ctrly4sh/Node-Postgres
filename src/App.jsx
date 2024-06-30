import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { login, logout } from "./store/authSlice"
import authService from './appwrite/auth';
import "./App.css";
import Header from './components/Header';
import Footer from "./components/Footer"

const App = () => {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          logout({ userData })
        }
      })
      .catch((error) => { console.log(error); })
      .finally(setLoading(false))
  }, [setLoading])

  // console.log(import.meta.env.VITE_APPWRITE_URL);

  return !loading ? (
    <>
      <div className='min-h-screen flex flex-wrap'>
        <div className='w-full block'>
          <Header/>
          <Footer/>
        </div>
      </div>
    </>
  ) : null

}

export default App