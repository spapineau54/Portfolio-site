import React from 'react'
import { Container } from 'react-bootstrap'
import employers from '../employers.json'
import Employer from '../components/Employer'

const ResumeView = () => {
  return (
    <>
      <h1 className='text-center mt-5 display-5 '>
        Your Time is Valuable, So It's All Right Here For You!
      </h1>
      <h3 className='text-center p-4'>
        <i>No Download Required</i>
      </h3>
      <Container
        fluid
        className='d-flex flex-column flex-lg-row justify-content-between p-3'
      >
        {employers.map((employer) => {
          return <Employer employer={employer} />
        })}
      </Container>
      <h2>See Some of the things I've Worked On</h2>
    </>
  )
}

export default ResumeView
