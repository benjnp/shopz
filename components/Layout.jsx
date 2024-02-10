import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import "../app/globals.css"
import { ContextWrapper } from '@/context'

const Layout = ({children}) => {
  return (
    <ContextWrapper>
    <div className="layout">
      <Head>
        <title>Shopz by Next JS</title>
      </Head>
      <header>
        <Navbar />
      </header>
        <main className="main-container">
          {children}
        </main>
      <footer><Footer /></footer>
    </div>
    </ContextWrapper>
  )
}

export default Layout