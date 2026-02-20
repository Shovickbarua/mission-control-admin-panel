import { BrowserRouter, Routes, Route } from "react-router"
import Login from "../pages/Login"

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
           <Route path="/" element={<Login/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter