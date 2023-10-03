import AboutPage from "../pages/AboutPage"
import ContentPage from "../pages/ContentPage"
import HomePage from "../pages/HomePage"
import NavBar from "./NavBar"
import {Routes,Route} from 'react-router-dom'

const AppRouter = () => {
  return (
    <>
        <NavBar/>
        <Routes>
            <Route path="/*" element={<HomePage/>}/>
            <Route path="/home" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/content" element={<ContentPage/>}/>
        </Routes>
    </>
  )
}

export default AppRouter