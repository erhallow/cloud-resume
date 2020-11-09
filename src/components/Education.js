import React from 'react';

const Education = ({ data }) => {
    return (
      <div className='p-5 pt-0'>
        <span className='text-3xl text-teal-600'>{ data.title }</span>
        <div>
        { data.school.map((item) => {
              return (
                <div key={item.degree}>
                  <div className='pb-4 pt-3'>
                    <div className='font-bold text-xl'>{item.degree}</div>
                    <div>{item.concentration}</div>
                    <div>{item.school}</div>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    );
  };

export default Education;
