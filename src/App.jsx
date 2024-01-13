import GetStart from "./pages/GetStart.jsx";
import {Routes, Route} from "react-router-dom"
import Login from "./pages/LoginPage.jsx"
import Regist from "./pages/RegistPage.jsx"

function App() {
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