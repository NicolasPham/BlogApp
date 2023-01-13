import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { categories } from "../constants/categories";

const Write = () => {
  const [value, setValue] = useState("");

  return (
    <section className="add flex-row">
      <div className="content flex-column">
        <input type="text" placeholder="Title" />
        <ReactQuill
          className="context-textarea"
          theme="snow"
          value={value}
          onChange={setValue}
        />
      </div>
      <div className="menu flex-column">
        <div className="item">
          <h1>Publish</h1>
          <p>
            <b>Status:</b> Draft
          </p>
          <p>
            <b>Visibility:</b> Public
          </p>
          <div className="img_upload">
            <label htmlFor="img">Upload img</label>
            <input
              type="file"
              name=""
              id="img"
              style={{ visibility: "hidden" }}
            />
          </div>

          <div className="flex-row button">
            <button>Save as draft</button>
            <button>Udpate</button>
          </div>
        </div>
        <div className=" flex-column item">
          <h1>Categories</h1>
          {categories.map((cat, id) => (
            <div className="flex-row cat" key={id}>
              <input type="checkbox" name={cat} id={cat} />
              <label htmlFor={cat}>{cat}</label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Write;
