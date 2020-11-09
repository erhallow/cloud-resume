import React from 'react';

const Skills = ({ data }) => {
    return (
      <div className='p-5'>
        <h1 className='text-3xl text-teal-600 mb-2'>{data.title}</h1>
        <div>        
          <div>
               { data.icons.map((item) => (<i className={item} key={item}></i>) )}
          </div>
          <div>
          { data.iconscont.map((item) => (<i className={item} key={item}></i>) )}
          </div>
        </div>
        <h2 className='font-bold text-xl mt-5 mb-1'>
          { data.language.title }
        </h2>
        <div>
          { data.language.items }
        </div>
        <h2 className='font-bold text-xl mt-5 mb-1'>{ data.aws.title }</h2>
        <div>
          <span>{data.aws.items1}</span><br></br> 
          <span>{data.aws.items2}</span>
        </div>
      </div>
    );
  };

export default Skills;
