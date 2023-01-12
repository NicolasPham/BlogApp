import React from "react";

const posts = [
  {
    id: 0,
    img: "https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque vitae. Nec ultrices dui sapien eget mi proin sed libero enim. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Tristique nulla aliquet enim tortor at auctor. Purus in massa tempor nec feugiat nisl pretium fusce id. Facilisis leo vel fringilla est. Interdum velit laoreet id donec ultrices tincidunt. Dolor magna eget est lorem ipsum. Eleifend quam adipiscing vitae proin sagittis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Nisi porta lorem mollis aliquam ut porttitor leo a. Neque egestas congue quisque egestas.",
  },
  {
    id: 0,
    img: "https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque vitae. Nec ultrices dui sapien eget mi proin sed libero enim. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Tristique nulla aliquet enim tortor at auctor. Purus in massa tempor nec feugiat nisl pretium fusce id. Facilisis leo vel fringilla est. Interdum velit laoreet id donec ultrices tincidunt. Dolor magna eget est lorem ipsum. Eleifend quam adipiscing vitae proin sagittis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Nisi porta lorem mollis aliquam ut porttitor leo a. Neque egestas congue quisque egestas.",
  },
  {
    id: 0,
    img: "https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque vitae. Nec ultrices dui sapien eget mi proin sed libero enim. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Tristique nulla aliquet enim tortor at auctor. Purus in massa tempor nec feugiat nisl pretium fusce id. Facilisis leo vel fringilla est. Interdum velit laoreet id donec ultrices tincidunt. Dolor magna eget est lorem ipsum. Eleifend quam adipiscing vitae proin sagittis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Nisi porta lorem mollis aliquam ut porttitor leo a. Neque egestas congue quisque egestas.",
  },
];

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

              <button>Readmore</button>
            </div>
          </article>
        ))}
    </section>
  );
};

export default Home;
