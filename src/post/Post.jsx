import React from 'react';
import './Post.css';

const Post = () => {
  return (
    <div className='post'>
      <img className='postImg' src='' alt='' />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ut omnis accusamus expedita atque voluptate est voluptatem adipisci quam.</span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className='postDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ullam eos voluptatum tempora? Adipisci voluptatum velit voluptate aspernatur rerum placeat aliquid, assumenda atque eveniet ipsa porro non consequatur tenetur quae.</p>
    </div>
  );
};

export default Post;
