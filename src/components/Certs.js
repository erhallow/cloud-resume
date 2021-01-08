import React from 'react';
import ccp from './aws-ccp.png';
import saa from './aws-saa.png';
import trf from './terraform.png';

const Certs = ({ data }) => {
  return (
    <div>
        <h1 className='text-3xl text-teal-600 p-5'>{data.title}</h1>

        <div className='flex pl-4 pr-5'>
          <div className='h-32 w-32 container'>
            <img className='cert-icon' src={ccp} alt='saa'></img>
            <div className='overlay'>
              <div className='text'>
                <a
                  href={data.CCP.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {data.CCP.button}
                </a>
              </div>
            </div>
          </div>

          <div className='flex-1'>
            <div className='ml-3 mt-6'>
              <div className='font-bold text-xl'>{data.CCP.title}</div>
              <div>{data.CCP.date}</div>
            </div>
          </div>
        </div>

        <div className='flex pl-4 pt-4'>
          <div className='h-32 w-32 container'>
            <img className='cert-icon' src={saa} alt='saa'></img>
            <div className='overlay'>
              <div className='text'>
                <a
                  href={data.SAA.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-mono'
                >
                  {data.SAA.button}
                </a>
              </div>
            </div>
          </div>

          <div className='flex-1'>
            <div className='ml-3 mt-6'>
              <div className='font-bold text-xl'>
                {data.SAA.title}
              </div>
              <div>{data.SAA.date}</div>
            </div>
          </div>
        </div>

        <div className='flex pl-4 pt-4'>
          <div className='h-32 w-32 container'>
            <img className='cert-icon' src={trf} alt='terraform'></img>
            <div className='overlay'>
              <div className='text'>
                <a
                  href={data.TRF.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-mono'
                >
                  {data.TRF.button}
                </a>
              </div>
            </div>
          </div>

          <div className='flex-1'>
            <div className='ml-3 mt-6'>
              <div className='font-bold text-xl'>
                {data.TRF.title}
              </div>
              <div>{data.TRF.date}</div>
            </div>
          </div>
        </div>
      </div>
  );
};


export default Certs;
