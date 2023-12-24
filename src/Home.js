import { useState } from "react";

const Home = () => {
    
   const [blogs, setBlogs] = useState(
    [{id:1, title:"Exploring the Wonders of Serendipity", details:"Imagine wandering through the bustling", author:"chatGPT"},
    {id:3, title:"Exploring the Wonders of Serendipity", details:"Imagine wandering through the bustling", author:"chatGPT"},
    {id:2, title:"Exploring the Wonders of Serendipity", details:"Imagine wandering through the bustling", author:"chatGPT"}]
   );
  
    return(
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <h3>{blog.author}</h3>
                </div>
            ))}
        </div>
    );
}

export default Home;