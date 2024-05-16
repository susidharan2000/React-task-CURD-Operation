import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Create from "./Pages/Create";
import Edit from "./Pages/Edit";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
    const [id,setId] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details setId={setId} />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit id={id}/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
