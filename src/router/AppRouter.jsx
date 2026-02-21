import { BrowserRouter, Routes, Route } from "react-router"
import Login from "../pages/Login"
import Admin from "../pages/Admin"

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route path="/" element={<Login/>} />
           <Route path="/admin" element={<Admin/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
