import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { TopNav } from "./component/TopNav";
import { Routes,Route } from "react-router-dom";
import Home from "./component/Home";
import SignUp from "./component/SignUp";
import Dashboard from "./component/Dashboard";
import ProtectedRoute from "./component/Auth/ProtectedRoute";




function App() {
return(
    <>
   
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="sign-up" element={<SignUp/>} />
      <Route path="services" element={<Home/>} />
      <Route path="/" element={<ProtectedRoute/>}>
      <Route path="dashboard" element={<Dashboard/>} />
      </Route>
    </Routes>
    
    </>
  )
}

export default App
