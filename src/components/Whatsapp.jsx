import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import ReactWhatsapp from "react-whatsapp";
import "../assets/styles/components/sidebar.css";

const Whatsapp = () => {
  return (
    <div className="App">
    <ReactWhatsapp number="" message="Hello World!!!" />
    <FloatingWhatsApp phoneNumber="+994512061313" />
  </div>
  )
}

export default Whatsapp