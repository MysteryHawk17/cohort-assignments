import ColorChanger from "./components/ColorChanger/ColorChanger"
import ParagraphGenerator from "./components/ParagraphGenerator/ParagraphGenerator"
import ProfileCard from "./components/ProfileCard/ProfileCard"
import LoginPage from "./components/OTPLOGIN/Login"
import OTPPage from "./components/OTPLOGIN/OTP"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import BirthdayCard from "./components/BirthdayCards/Card1/BirthdayCard1"
import Card2 from "./components/BirthdayCards/Card2/Card2"
import Input from "./components/BirthdayCards/Input"
import GitCard from "./components/GithubCard/GitCard"
import Index from './Index.jsx'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          <Route path="/profile" element={<ProfileCard/>}/>
          <Route path="/colorchanger" element={<ColorChanger/>}/>
          <Route path="/paragenerator" element={<ParagraphGenerator/>}/>
          <Route path="/github" element={<GitCard/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/login/otp" element={<OTPPage/>}/>
          <Route path="/birthday" element={<Input/>}/>
          <Route path="/birthday/card1" element={<BirthdayCard/>}/>
          <Route path="/birthday/card2" element={<Card2/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

