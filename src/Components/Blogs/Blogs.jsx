import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] =useState([])
//  console.log(blogs)
   useEffect(() =>{
    fetch('blog.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
   },[])

    return (
        <div className="md:w-2/3 ">
           <h1 className="text-4xl mb-4">Blogs: {blogs.length}</h1>
           {
            blogs.map(blog =><Blog key={blog.id} blog={blog}
            handleAddToBookmark ={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blog>)
           }

        </div>
    );
};

export default Blogs;