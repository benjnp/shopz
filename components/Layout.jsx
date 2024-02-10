import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import "../app/globals.css"
import { ContextWrapper } from '@/context'
import { Toaster } from "react-hot-toast";

const Layout = ({children}) => {
  return (
    
    <div className="layout">
      <Head>
        <title>Shopz by Next JS</title>
      </Head>
      <ContextWrapper>
      <header>
        <Navbar />
      </header>
        <main className="main-container">
        <Toaster position="top-center" />
          {children}
        </main>
        </ContextWrapper>
      <footer><Footer /></footer>
    </div>
    
  )
}

export default Layout