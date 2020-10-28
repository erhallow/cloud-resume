import React from 'react';
import Post from './Post';

const Projects = ({ data }) => {
    return (
      <div className='p-5'>
        <h1 className='text-3xl text-teal-600 mb-3'>{data.title}</h1>
        <div>
        { data.list.map((item) => (
            <Post item={item} />
        )    
            )}
        </div>      
      </div>
    );
  };

export default Projects;
