// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import teamData from '../data/team-data.json'
import TeamMember from '../components/team-member'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
        <div className='flex items-center flex-col'>
            <div className='relative my-32 flex items-center flex-col'>
                <h1>Laurel Life</h1>
                <h2 className='text-2xl'>It starts with a plan</h2>
            </div>
            <StaticImage
                alt='clip art of a laurel wreath'
                src='../images/laurel-wreath-clip-art.png'
                className='absolute max-w-md'
            />
        </div>
        <div>
            <h2>Meet the Team</h2>
            {teamData.map((element, idx) => (
                <TeamMember
                    key={idx}
                    member={element}
                />
            ))}
        </div>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
// export const Head = () => <title>Home Page</title>
// export { Head } from '../components/layout'

// Step 3: Export your component
export default IndexPage
