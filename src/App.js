import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import './App.css'
import Products from "./components/Product/Products";
import MyContext from './Context'
import React, { useState } from 'react';
import Navbar from "./components/UI/Navbar";

function App() {
  const [data, setData] = useState(0)
  console.log(data);
  return (
    <MyContext.Provider value={{ data, setData }}>
      <div className="container">
        <Navbar />
        <Footer />
      </div>
    </MyContext.Provider>
  );
}

export default App