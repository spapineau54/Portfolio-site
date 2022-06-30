import React from 'react'
import Header from './Header'
import Footer from './Footer'
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className=' d-flex flex-column justify-content-center align-self-center'>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
