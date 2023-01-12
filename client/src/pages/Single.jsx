import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import { posts } from '../constants/posts';

const Single = () => {
  return (
    <section className="single flex-row">
      <div className="content flex-column">
        <img
          src="https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />

        <div className="info flex-row-center">
          <div className="user flex-row-center">
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            />
            <span>Nicolas</span>

            <div className="edit flex-row">
              <Link className="link" to="/write?edit=2">
                <AiFillEdit className="edit_edit" />
              </Link>
              <AiFillDelete className="edit_delete" />
            </div>
          </div>
          <p>Posted 2 days ago</p>

        </div>
        <article className="flex-column">
          <h1 className="title">{posts[0].title}</h1>
          <p className="desc">{posts[0].desc}</p>
        </article>
      </div>
      <Menu/>
    </section>
  );
};

export default Single;
