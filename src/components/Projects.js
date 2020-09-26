import React, { Component } from 'react';

export class Projects extends Component {
  render() {
    return (
      <div className='p-5'>
        <h1 className='text-3xl text-teal-600 mb-3'>PROJECTS</h1>
        <div>
          <h3 className='font-bold'>CLOUD RESUME</h3>
          <span>
            <a
              href='https://github.com/erhallow/cloud-resume'
              target='_blank'
              rel='noopener noreferrer'
              className='hover-underline-center'
            >
              <i className='fab fa-github'></i> GITHUB LINK{' '}
            </a>{' '}
          </span>
        </div>
        <div className='mt-3'>
          This project is the website you are currently on. The frontend is
          built with React, TailwindCSS, and custom CSS. The backend utilizes
          AWS services such as S3, CloudFront, Route 53, DynamoDB, API Gateway,
          Python Lambda Functions, and SAM templates.
        </div>
      </div>
    );
  }
}

export default Projects;
