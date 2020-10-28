import React from 'react';

const Post = ({ item }) => {
    return (
             <div>
                <h3 className='font-bold text-xl'>{item.title}</h3>
                {item.githublinkname && 
                <span className="pr-4">
                <a href={item.githublink} target='_blank' rel='noopener noreferrer' className='hover-underline-center'>
                  <i className={item.githubicon}></i> {item.githublinkname}
                </a>
                </span>
                }
                {item.livelink &&
                <span className="pr-4">
                <a href={item.livelink} target='_blank' rel='noopener noreferrer' className='hover-underline-center'>
                  <i className={item.liveicon}></i> {item.livelinkname}
                </a>
                </span>
                } 
                {item.secondarylinkname &&
                <span className="pr-4">
                <a href={item.secondarygithublink} target='_blank' rel='noopener noreferrer' className='hover-underline-center'>
                  <i className={item.secondgithubicon}></i> {item.secondarylinkname}
                </a>
                </span>
                }       
                <span>
                <a href={item.bloglink} target='_blank' rel='noopener noreferrer' className='hover-underline-center'>
                  <i className={item.blogicon}></i> {item.blogname}
                </a>
                </span>
                <div className='mt-1 mb-8'>
                  {item.description}
                </div>
            </div>
    )
}

export default Post;