import React from "react";
import NavBar from "./components/navbar";
import AddUser from "./components/AddUser";
import AllUsers from "./components/AllUsers";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
         <Route path="/" element={<Home/>}  />
         <Route path="/all" element={<AllUsers/>}  />
         <Route path="/adduser" element={<AddUser/>}  />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
