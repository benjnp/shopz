import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import "../app/globals.css"
import { ContextWrapper } from '@/context'

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
          {children}
        </main>
        </ContextWrapper>
      <footer><Footer /></footer>
    </div>
    
  )
}

export default Layout