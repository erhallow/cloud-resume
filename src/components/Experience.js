import React, { Component } from 'react';

export class Experience extends Component {
  render() {
    return (
      <div className='p-5'>
        <h1 className='text-3xl text-teal-600 mb-2'>PROFESSIONAL EXPERIENCE</h1>
        <div className='mb-5'>
          <h2 className='font-bold'>FREELANCE WEB DEVELOPER</h2>
          <div>
            <div>July 2020</div>
            <div>
              <a
                href='https://github.com/erhallow/top10crypto'
                target='_blank'
                rel='noopener noreferrer'
                className='hover-underline-center'
              >
                <i class='fab fa-github'></i> GITHUB LINK
              </a>{' '}
              |{' '}
              <a
                href='https://www.top10cryptovol.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover-underline-center'
              >
                LIVE SITE
              </a>
            </div>
          </div>
          <ul className='list-disc pl-5'>
            <li>
              Designed a single page React application to satisfy customer
              specifications
            </li>
            <li>
              Pulled data from a crypto API and stored it in the component state
            </li>
            <li>
              Enhanced the frontend design using Bootstrap and custom CSS,
              utilizing a table format for web and card format for mobile
            </li>
            <li>
              Utilized conditional formatting to enhance the readability of the
              data
            </li>
          </ul>
        </div>
        <div>
          <h2 className='font-bold'>PROFESSIONAL POKER PLAYER</h2>
          <h3>June 2012 - Present</h3>
          <ul className='list-disc pl-5'>
            <li>
              Run PostgreSQL database queries of over 2 million hands to
              identify and improve inconsistencies in strategy utilizing a game
              theory optimal framework
            </li>
            <li>
              Execute a variety of strategies while playing up to 12 tables
              simultaneously
            </li>
            <li>
              Manage risk and grow bankroll through diversification of game type
              and stakes
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Experience;
