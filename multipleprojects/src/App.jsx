import { useEffect, useRef, useState } from "react";
import "./App.css";

import {BrowserRouter, Route, Routes} from "react-router-dom"
import ProgressBar from "./Projects/ProgressBar";
import Otp from "./Projects/Otp";
import Home from "./pages/Home";



export default function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/otp-validator" element={<Otp/>} />
    <Route path="/Progress-bar" element={<ProgressBar/>} />
    

   </Routes>
   
   </BrowserRouter>
  );
}
