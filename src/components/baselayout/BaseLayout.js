import React from 'react'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

function BaseLayout(props) {
  return (
    <>
    <Header />
    
    {props.children}
    <Footer/>
    </>
  )
}

export default BaseLayout
