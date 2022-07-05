import React from 'react'
import { Card, Container } from 'react-bootstrap'
import CardHeader from 'react-bootstrap/esm/CardHeader'

const AboutView = () => {
  return (
    <Container fluid className='p-5'>
      <h1 className='w-70 text-lg-center mx-auto border-bottom border-info'>
        Bringing Modern Solutions to Your Business
      </h1>

      <Container
        fluid
        className='d-flex flex-column flex-lg-row justify-content-between py-5'
      >
        <Card
          style={{
            borderRadius: '15px',
          }}
          className='m-3 w-100 p-3 bg-dark text-white shadow'
        >
          <CardHeader>
            <span style={{ color: 'white', fontSize: '1.5rem' }}>
              Competency in these Technologies:
            </span>
          </CardHeader>
          <Card.Body>
            <ul style={{ fontSize: '1.5rem' }} className=' list-unstyled'>
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
            borderRadius: '15px',
          }}
          className='m-3 w-100 p-3 bg-dark text-white shadow'
        >
          <CardHeader>
            <span style={{ color: 'white', fontSize: '1.5rem' }}>
              Other Related Skills:
            </span>
          </CardHeader>
          <Card.Body>
            <ul style={{ fontSize: '1.5rem' }} className=' list-unstyled'>
              <li>
                <i class='fa-solid fa-database p-3'></i>
                SQL Server Management
              </li>
              <li>
                <i class='fa-brands fa-figma p-3'></i> UI Design and Prototyping
                with Figma
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
      <h1 className=' w-70 text-lg-center mx-auto border-bottom border-info'>
        Soft Skills to Elevate the Tech Skills
      </h1>
      <ul className='p-3'>
        <li>Management of 10+ team members.</li>
        <li>
          100% Self Taught Developer with hundreds of hours invested on top of
          full time employment.
        </li>
        <li>
          Remote communication strategies (Google Chats, Email, Zoom Office,
          Whiteboards, Notion, Slack, Clickup)
        </li>
        <li>
          Strong Organization and Prioritization skills with utilization of
          Trello and Notion
        </li>

        <li>
          Daily Investment into learning new skills, languages, and technologies
          to make myself ever growing in value as a member of the tech industry
        </li>
        <li>
          <strong>
            A passion for tech, programming, and creating technology to make our
            lives easier, safer, and enjoyable.
          </strong>
        </li>
      </ul>
    </Container>
  )
}

export default AboutView
