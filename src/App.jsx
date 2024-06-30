import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {login , logout} from "./store/authSlice"
import authService from './appwrite/auth';
import "./App.css";

const App = () => {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else{
        logout(userData)
      }
    })
    .catch((error) => {console.log(error);})
    .finally()
  }, [])

  // console.log(import.meta.env.VITE_APPWRITE_URL);

  return (
    <div>Blog app with appwrite</div>
  )
}

export default App