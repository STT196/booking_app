import React from "react";
import IndexPage from "./pages/IndexPage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./pages/Layout";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";

axios.defaults.baseURL='http://localhost:5000/booking'
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      
      <Route path="/" element={<IndexPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>


      </Route>

    </Routes>
  
  );
}

export default App;
