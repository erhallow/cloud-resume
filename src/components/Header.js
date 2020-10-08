import React, { Component } from 'react';
import headshot from './headshot.jpeg';

export class Header extends Component {
  render() {
    return (
      <div>
        <div className='flex pl-5 pt-5'>
          <div className='flex-auto text-left font-mono'>
            <h1 className='text-5xl text-white'>ERIC HALLOW</h1>
            <h3 className='text-teal-600'>
              AWS Certified Professional and Web Developer
            </h3>
            <div className=' mt-2'>
              <div className='select-all'>
                <i className='fas fa-envelope-square pr-2'></i>
                ERHALLOW@GMAIL.COM
              </div>
              <i className='fas fa-map-marker-alt pt-1'></i> CHICAGO, IL
              <div className='pt-1 md:hidden'>
                <a
                  href='https://twitter.com/EricHallow'
                  target='blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-twitter-square text-xl pl-0 pr-1 hover:text-teal-600'></i>
                </a>
                <a
                  href='https://www.linkedin.com/in/eric-hallow/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-linkedin text-xl p-1 hover:text-teal-600'></i>
                </a>
                <a
                  href='https://erhallow.hashnode.dev/'
                  target='blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-blogger text-xl p-1 hover:text-teal-600'></i>
                </a>
              </div>
              <div className='pt-1'>Visitor Count: {this.props.visitCount}</div>
            </div>
          </div>

          <div className='flex-auto text-right m-2'>
            <img
              src={headshot}
              alt='headshot'
              className='object-cover object-center h-32 w-32 rounded-full mx-auto overflow-hidden border-4 border-col-grey shadow-lg'
            ></img>

            <div className='invisible md:visible text-center pt-5'>
              <a
                href='https://twitter.com/EricHallow'
                target='blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-twitter-square text-4xl p-1 hover:text-teal-600'></i>
              </a>
              <a
                href='https://www.linkedin.com/in/eric-hallow/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-linkedin text-4xl p-1 hover:text-teal-600'></i>
              </a>
              <a
                href='https://erhallow.hashnode.dev/'
                target='blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-blogger text-4xl p-1 hover:text-teal-600'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
