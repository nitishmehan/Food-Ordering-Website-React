import React from 'react';

function BlogsList({ blogs, onBlogClick }) {
  return (
    <div className="right">
      {blogs.map((blog, index) => (
        <div
          className="card dark_icon"
          key={index}
          onClick={() => onBlogClick(blog)}
          style={{ cursor: 'pointer' }}
        >
          <img src={blog.img} alt="Card Image" />
          <div className="card-content">
            <p id="dark_color">By {blog.author} in Food</p>
            <h2 id="dark_color">{blog.title}</h2>
            <p id="dark_color">{blog.content.substring(0, 100)}...</p>
            <p className="author" id="dark_color">on {blog.date} By {blog.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogsList;
