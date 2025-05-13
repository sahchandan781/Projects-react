import { useEffect, useRef, useState } from "react";
import "./App.css";

import {BrowserRouter, Route, Routes} from "react-router-dom"
import ProgressBar from "./Projects/ProgressBar";
import Otp from "./Projects/Otp";
import Home from "./pages/Home";
import ToDoList from "./Projects/ToDoList";
import ContactForm from "./Projects/ContactForm";
import ChipsInput from "./Projects/ChipsInput";
import DiceRoller from "./Projects/DiceRoller";
import PasswordStrength from "./Projects/PasswordStrength";



export default function App() {

  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/otp-validator" element={<Otp/>} />
    <Route path="/Progress-bar" element={<ProgressBar/>} />
    <Route path="/todolist" element={<ToDoList/>} />
    <Route path="/contact" element={<ContactForm/>} />
    <Route path="/chipinput" element={<ChipsInput/>} />
    <Route path="/diceroller" element={<DiceRoller/>} />
    <Route path="/passwordstrength" element={<PasswordStrength/>} />
    

   </Routes>
   
   </BrowserRouter>
  );
}
