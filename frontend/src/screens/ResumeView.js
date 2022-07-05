import React from 'react'
import { Container } from 'react-bootstrap'
import employers from '../employers.json'
import Employer from '../components/Employer'
import Project from '../components/Project'
import projects from '../projects.json'

const ResumeView = () => {
  return (
    <Container>
      <h1 className='w-80   text-center  mt-5 display-5 '>
        Your Time is Valuable.
      </h1>
      <Container style={{ fontSize: '1rem' }} fluid className='text-center'>
        <i className='fa-solid fa-circle-arrow-down px-2'></i>
        <span>Interact Below to see my work</span>
        <i className='fa-solid fa-circle-arrow-down px-2'></i>
      </Container>

      <Container
        fluid
        className='d-flex flex-column flex-lg-row justify-content-between p-3'
      >
        {employers.map((employer) => {
          return <Employer employer={employer} />
        })}
      </Container>
      <h2 className='mt-5 p-3 text-center border-bottom border-info w-90 mx-auto '>
        Some of the things I've Worked On.
      </h2>
      <Container
        fluid
        className='d-flex flex-column flex-lg-row justify-content-between'
      >
        {projects.map((project) => {
          return <Project project={project} />
        })}
      </Container>
    </Container>
  )
}

export default ResumeView
