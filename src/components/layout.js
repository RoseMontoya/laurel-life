import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet';
import '../styles/global.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div className='bg-lightPink min-h-vh'>
        <Helmet>
            <link id='icon' rel="icon" type="image/x-icon" href="/laurel-life-favicon.ico" />
        </Helmet>
      <nav className='bord-sep p-4 bg-medBlue text-lightPink'>
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

// export const Head = () => (
//     <>
//         <link id='icon' rel="icon" type="image/png" href="/laurel-life-favicon.png" />
//     </>
// )
