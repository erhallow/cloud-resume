import React, { Component } from 'react';

export class Skills extends Component {
  render() {
    return (
      <div className='p-5'>
        <h1 className='text-3xl text-teal-600 mb-2'>SKILLS</h1>
        <div>
          <div>
            <i className='fab fa-js-square text-5xl m-2 hover:text-teal-600'></i>
            <i className='fab fa-react text-5xl m-2 hover:text-teal-600'></i>
            <i className='fab fa-html5 text-5xl m-2 hover:text-teal-600'></i>
            <i className='fab fa-css3-alt text-5xl m-2 hover:text-teal-600'></i>
          </div>
          <div>
            <i className='fab fa-bootstrap text-5xl m-2 hover:text-teal-600'></i>
            <i className='fab fa-python text-5xl m-2 hover:text-teal-600'></i>
            <i className='fab fa-git text-5xl m-2 hover:text-teal-600'></i>
            <i className='fab fa-github-square text-5xl m-2 hover:text-teal-600'></i>
          </div>
        </div>
        <h2 className='font-bold mt-5 mb-1'>LANGUAGES AND FRAMEWORKS</h2>
        <div>
          JavaScript, React, Python, HTML, CSS, Bootstrap, TailwindCSS, Git
        </div>
        <h2 className='font-bold mt-5 mb-1'>AWS CLOUD SERVICES</h2>
        <div>
          S3, Cloudfront, Route 53, DynamoDB, API Gateway, Lambda,<br></br>Step
          Functions, SNS, SES
        </div>
      </div>
    );
  }
}

export default Skills;
