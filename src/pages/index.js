// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
        <div className='flex items-center flex-col min-h-fit'>
            <div className='relative top-32 flex items-center flex-col'>
                <h1>Laurel Life</h1>
                <h2>It starts with a plan</h2>
            </div>
            <StaticImage
                alt='clip art of a laurel wreath'
                src='../images/laurel-wreath-clip-art.png'
                className='absolute max-w-md'
            />
        </div>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
// export const Head = () => <title>Home Page</title>
export { Head } from '../components/layout'

// Step 3: Export your component
export default IndexPage
