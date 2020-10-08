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
        <div className='mt-3 mb-3'>
          This project is the website you are currently on. The frontend is
          built with React, TailwindCSS, and custom CSS. The backend utilizes
          AWS services such as S3, CloudFront, Route 53, DynamoDB, API Gateway,
          Python Lambda Functions, and SAM templates.
        </div>
        <div>
          <h3 className='font-bold'>SERVERLESS MESSAGING APPLICATION</h3>
          <span>
            <a
              href='https://erhallow.hashnode.dev/build-an-aws-simple-serverless-messaging-application-ckfzuavt800x3lss13e0uf4rg'
              target='_blank'
              rel='noopener noreferrer'
              className='hover-underline-center'
            >
              <i class='fab fa-blogger-b'></i> BLOG LINK{' '}
            </a>{' '}
          </span>
        </div>
        <div className='mt-3'>
          This project was built using a variety of AWS services: Step
          Functions, Lambda Functions, API Gateway, Simple Notification Service
          (SNS), Simple Email Service (SES), and S3. To read more about how I
          built this, click the blog link above.
        </div>
      </div>
    );
  }
}

export default Projects;
