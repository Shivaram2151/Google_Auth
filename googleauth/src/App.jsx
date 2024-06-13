import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GoogleLogin

      onSuccess={credentialResponse => {
        const decodedHeader = jwtDecode(credentialResponse.credential)
        console.log(credentialResponse);
      console.log(decodedHeader)
    }}
      onError={() => {
      console.log('Login Failed')
      }}
/>
     
    </>
  )
}

export default App
