import React from 'react'
import { Card, Container } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'

const AboutView = () => {
  return (
    <Container className='p-5'>
      <h1 className='text-center'>
        Bringing Modern Solutions to your Business
      </h1>

      <Container className='d-flex flex-column flex-lg-row py-5'>
        <Card
          style={{
            maxWidth: '600px',
            borderRadius: '15px',
          }}
          className='m-3    p-3 bg-dark text-white shadow'
        >
          <CardHeader>
            <h3 style={{ color: 'white' }}>
              Self-Taught and Competent in these Technologies:
            </h3>
          </CardHeader>
          <Card.Body>
            <ul
              style={{ fontSize: '1.5rem' }}
              className=' p-4 d-flex flex-wrap flex-lg-column-wrap justify-content-between align-content-center  list-unstyled'
            >
              <li>
                <i class='fa-brands fa-js-square p-3'></i>Javascript
              </li>
              <li>
                <i class='fa-brands fa-react p-3'></i>React.js
              </li>
              <li>
                <i class='fa-brands fa-vuejs p-3'></i>Vue.js
              </li>
              <li>
                <i class='fa-brands fa-js-square p-3'></i>Next.js
              </li>
              <li>
                <i class='fa-brands fa-js-square p-3'></i>Express.js
              </li>
              <li>
                <i class='fa-brands fa-node-js p-3'></i>Node.js
              </li>
              <li>
                <i class='fa-brands fa-css3 p-3'></i>Tailwind
              </li>
              <li>
                <i class='fa-brands fa-bootstrap p-3'></i>Bootstrap
              </li>
              <li>
                <i class='fa-brands fa-git-alt p-3'></i>git
              </li>
            </ul>
          </Card.Body>
        </Card>
        <Card
          style={{
            maxWidth: '600px',
            borderRadius: '15px',
          }}
          className='m-3    p-3 bg-dark text-white shadow'
        >
          <CardHeader>
            <h2 style={{ color: 'white' }}>Other Related Skills</h2>
          </CardHeader>
          <Card.Body>
            <ul
              style={{ fontSize: '1.5rem' }}
              className=' p-4 d-flex flex-wrap flex-shrink-1 flex-row flex-lg-column-wrap justify-content-between  list-unstyled'
            >
              <li>
                <i class='fa-solid fa-database p-3'></i>
                SQL Server Management
              </li>
              <li>
                <i class='fa-brands fa-windows p-3'></i>
                Data Analysis with Excel, Power BI, and Azure
              </li>
              <li>
                <i class='fa-brands fa-python p-3'></i>
                Python
              </li>
              <li>
                <i class='fa-brands fa-apple p-3'></i>
                MacOS and Swift
              </li>
              <li></li>
              <li></li>
            </ul>
          </Card.Body>
        </Card>
      </Container>
      <h2 className='text-center border-bottom border-info'>
        Soft Skills to Elevate the Tech Skills
      </h2>
      <ul className='p-3'>
        <li>Management of 10+ team members</li>
        <li>
          Remote communication strategies (Google Chats, Email, Zoom Office,
          Whiteboards, Notion, Slack, Clickup)
        </li>
        <li>Organization and Prioritization of Work</li>
        <li>
          Daily Investment into learning new skills, languages, and technologies
          to make myself ever growing in value as a member of the tech industry
        </li>
        <li>
          <strong>
            A strong passion for tech, programming, and creating technology to
            make our lives easier, safer, and enjoyable.
          </strong>
        </li>
      </ul>
    </Container>
  )
}

export default AboutView
