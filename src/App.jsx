import GetStart from "./pages/GetStart.jsx";
import {Routes, Route} from "react-router-dom"
import Login from "./pages/LoginPage.jsx"
import Regist from "./pages/RegistPage.jsx"
import React, { useEffect, useState } from "react"

function App() {
  // const [backendData, setBackendData] = useState([{}])

  // useEffect(() => {
  //   fetch("http://localhost:3000").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       console.log(data)
  //     }
  //   )
  // }, [])

  // console.log(backendData.msg)

  // const request = async () => {
  //   const request = await fetch("http://localhost:3000")
  //   return request.json()
  // }

  // (async () => {
  //   try {
  //     const data = await request()
  //     console.log(data)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // })()

  // fetch("http://localhost:3000/userRegist", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify({
  //     username: "Schrodinger's cat",
  //     email: "shrodingerCat@gmail.com",
  //     password: "M3m3ntom0r1@"
  //   })
  // }).then(
  //   response => response.json()
  // ).then(data => { console.log(data) })

  return (
    <>
      <Routes>
        <Route path='/'element={<GetStart/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/regist" element={<Regist/>}/>
      </Routes>
    </>
  )
}

export default App