import GetStart from "./pages/GetStart.jsx";
import {Routes, Route} from "react-router-dom"
import Login from "./pages/LoginPage.jsx"
import Regist from "./pages/RegistPage.jsx"
import React, { useEffect, useState } from "react"

function App() {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("http://localhost:3000/").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data) 
      }
    )
  }, [])

  // const request = fetch(() => {
  //   fetch("http://localhost:3000/useRegist").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       console.log(data)
  //     }
  //   )
  // })

  // console.log(request)

  return (
    <>
      <Routes>
        <Route path='/'element={<GetStart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/regist" element={<Regist/>}/>
      </Routes>
      {/* <div>
        {(!backendData || !backendData.users) ? (
          <p>Loading...</p>
        ) : (
          backendData.users
        )}
      </div> */}
    </>
  )
}

export default App