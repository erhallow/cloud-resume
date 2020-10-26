import React, { Component } from 'react';

export class Projects extends Component {
  render() {
    return (
      <div className='p-5'>
        <h1 className='text-3xl text-teal-600 mb-3'>PROJECTS</h1>
        <div>
          <h3 className='font-bold text-xl'>CLOUD RESUME</h3>
          <span>
            <a
              href='https://github.com/erhallow/cloud-resume'
              target='_blank'
              rel='noopener noreferrer'
              className='hover-underline-center'
            >
              <i className='fab fa-github'></i> GITHUB FRONTENED{' '}
            </a>{' '}
          </span>{' '}
          |{' '}
          <span>
            <a
              href='https://github.com/erhallow/cloud-resume-backend'
              target='_blank'
              rel='noopener noreferrer'
              className='hover-underline-center'
            >
              <i className='fab fa-github'></i> GITHUB BACKEND{' '}
            </a>{' '}
          </span>{' '}
          |{' '}
          <span>
            <a
              href='https://erhallow.hashnode.dev/cloud-resume-challenge-ckg1f6bhb01oiw6s1dd5399qv'
              target='_blank'
              rel='noopener noreferrer'
              className='hover-underline-center'
            >
              <i className='fab fa-blogger-b'></i> BLOG LINK{' '}
            </a>{' '}
          </span>
        </div>
        <div className='mt-1 mb-8'>
          This project is the website you are currently on. The frontend is
          built with React, TailwindCSS, and custom CSS. The backend utilizes
          AWS services such as S3, CloudFront, Route 53, DynamoDB, API Gateway,
          Python Lambda Functions, and SAM templates. For a more detailed
          explanation of how I built this, click the blog link above.
        </div>
        <div>
          <h3 className='font-bold text-xl'>TOP 10 CRYPTO DATA</h3>
          <span>
            <a
              href='https://github.com/erhallow/top10crypto'
              target='_blank'
              rel='noopener noreferrer'
              className='hover-underline-center'
            >
              <i className='fab fa-github'></i> GITHUB LINK{' '}
            </a>{' '}
          </span>{' '}
          |{' '}
          <span>
            <a
              href='https://www.top10cryptovol.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover-underline-center'
            >
              LIVE SITE{' '}
            </a>{' '}
          </span>
        </div>
        <div className='mt-1 mb-8'>
          This project was made in React and pulls live data from the
          CryptoCompare API. It allows the user to sort cryptocurrencies by
          daily dollar change or percentage change.
        </div>
        <div>
          <h3 className='font-bold text-xl'>
            SERVERLESS MESSAGING APPLICATION
          </h3>
          <span>
            <a
              href='https://erhallow.hashnode.dev/build-an-aws-simple-serverless-messaging-application-ckfzuavt800x3lss13e0uf4rg'
              target='_blank'
              rel='noopener noreferrer'
              className='hover-underline-center'
            >
              <i className='fab fa-blogger-b'></i> BLOG LINK{' '}
            </a>{' '}
          </span>
        </div>
        <div className='mt-1 mb-8'>
          This project was built using a variety of AWS services: Step
          Functions, Lambda Functions, API Gateway, Simple Notification Service
          (SNS), Simple Email Service (SES), and S3. To read more about how I
          built this, click the blog link above.
        </div>
        <div>
          <h3 className='font-bold text-xl'>SITE-TO-SITE VPN</h3>
          <span>
            <a
              href='https://erhallow.hashnode.dev/build-a-site-to-site-vpn-from-aws-to-the-customer-ckgiaxu0e03c2rhs17mhu8s1j'
              target='_blank'
              rel='noopener noreferrer'
              className='hover-underline-center'
            >
              <i className='fab fa-blogger-b'></i> BLOG LINK{' '}
            </a>{' '}
          </span>
        </div>
        <div className='mt-1 mb-8'>
          I built a secure VPN connection between the AWS network and a
          customer's network using the Border Gateway Protocol for routing. To
          read more about how I built this, click the blog link above.
        </div>
        <div>
          <h3 className='font-bold text-xl'>HYBRID DNS</h3>
          <span>
            <a
              href='https://erhallow.hashnode.dev/create-a-hybrid-dns-ckgqu9td100hi76s14dnrbzce'
              target='_blank'
              rel='noopener noreferrer'
              className='hover-underline-center'
            >
              <i className='fab fa-blogger-b'></i> BLOG LINK{' '}
            </a>{' '}
          </span>
        </div>
        <div className='mt-1 mb-8'>
          In this project, I used AWS Route 53 to create a hybrid Domain Name
          System (DNS) between the AWS network and a customer's network. To read
          more about how I built this, click the blog link above.
        </div>

        <div>
          <h3 className='font-bold text-xl'>WEB IDENTITY FEDERATION</h3>
          <span>
            <a
              href='https://erhallow.hashnode.dev/aws-web-identity-federation-ckgqugjt100iy69s174ke31tw'
              target='_blank'
              rel='noopener noreferrer'
              className='hover-underline-center'
            >
              <i className='fab fa-blogger-b'></i> BLOG LINK{' '}
            </a>{' '}
          </span>
        </div>
        <div className='mt-1 mb-3'>
          In this project, I created Google authentication to access my
          privately stored files on an AWS S3 bucket. It was displayed on a
          static website hosted on S3. To read more about how I built this,
          click the blog link above.
        </div>
      </div>
    );
  }
}

export default Projects;
