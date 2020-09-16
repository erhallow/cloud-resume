import React, { Component } from 'react';

export class Projects extends Component {
  render() {
    return (
      <div className='p-5'>
        <h1 className='text-3xl text-teal-600'>PROJECTS</h1>
        <div>
          <h3 className='font-bold'>CLOUD RESUME</h3>
          <span>
            <a
              href='https://github.com/erhallow/top10crypto'
              target='_blank'
              rel='noopener noreferrer'
              className='hover-underline-center'
            >
              <i class='fab fa-github'></i> GITHUB LINK{' '}
            </a>{' '}
            |{' '}
            <a
              href='https://github.com/erhallow/top10crypto'
              target='_blank'
              rel='noopener noreferrer'
              className='hover-underline-center'
            >
              LIVE WEBSITE
            </a>
          </span>
        </div>
        <div>
          This current project you are looking at. JS, React, TailwindCSS,
          custom CSS. AWS Services. Hosted on S3. Cloudfront.
        </div>
      </div>
    );
  }
}

export default Projects;
