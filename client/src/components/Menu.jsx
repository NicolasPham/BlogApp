import React from 'react'
import {posts} from '../constants/posts';

const Menu = () => {
  return (
    <section className='menu flex-column'>
        <h1 className='title'>Other posts you may like</h1>
        {posts.map((post) => (
            <article className='flex-column' key={post.id}>
                <img src={post.img} alt="" />
                <h1>{post.title}</h1>
                <button className='desc'>Readmore</button>
            </article>
        ))}
    </section>
  )
}

export default Menu