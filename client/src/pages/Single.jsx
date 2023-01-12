import React from "react";
import { AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const Single = () => {
  return (
    <section className="single flex-row">
      <div className="content">
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

            <div className="edit">
              <Link className="link" to="/write?edit=2">
                <AiFillEdit />
              </Link>
            </div>
          </div>
          <p>Posted 2 days ago</p>
        </div>
      </div>
      <div className="menu">Menu</div>
    </section>
  );
};

export default Single;
