import * as React from 'react'
import { Link } from 'gatsby'
import '../styles/global.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className='bg-lightPink min-h-vh p-8'>
      <nav>
        <ul className='flex justify-between align-center'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main className='p-8 '>
        {/* <h1>{pageTitle}</h1> */}
        {children}
      </main>
    </div>
  )
}

export default Layout
