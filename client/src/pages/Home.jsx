import React from "react";
import { Link } from "react-router-dom";
import { posts } from "../constants/posts";

const Home = () => {
  return (
    <section className="home flex-column">
      {posts.map((post) => (
        <article key={post.id}>
          <div className="img">
            <img src={post.img} alt="" />
          </div>
          <div className="content flex-column">
            <h1 className="title">{post.title}</h1>
            <span className="desc">{post.desc}</span>

            <Link to={`/single/${post.id}`} className="link">
              <button>Readmore</button>
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Home;
