import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'

const ShareLayput = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  )
}

export default ShareLayput
