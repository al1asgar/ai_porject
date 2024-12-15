import React from "react";

const BlogCard = ({ blog }) => (
  <div className="p-4 border rounded shadow">
    <h3 className="font-bold">{blog.title}</h3>
    <p>{blog.excerpt}</p>
    <button className="text-blue-500 mt-2">Read More</button>
  </div>
);

export default BlogCard;
