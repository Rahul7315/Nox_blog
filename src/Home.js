import { useState } from "react";
import Blog_list from "./blog_list";
const Home = () => {
    
   const [blogs, setBlogs] = useState(
    [{id:1, title:"Exploring the Wonders of Serendipity", details:"Imagine wandering through the bustling", author:"John"},
    {id:3, title:"Exploring the Wonders of Serendipity", details:"Imagine wandering through the bustling", author:"Maric"},
    {id:2, title:"Exploring the Wonders of Serendipity", details:"Imagine wandering through the bustling", author:"Lucy"}]
   );
  
    return(
        <div className="home">
        <Blog_list blogs={blogs} title={"All Blogs"}/>
        <Blog_list blogs={blogs.filter((blog)=> blog.author === 'Lucy')} title={"Lucy's Blog"}/>
        </div>
    );
}

export default Home;