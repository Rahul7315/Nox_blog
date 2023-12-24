import { useState } from "react";
import Blog_list from "./blog_list";
const Home = () => {
    
   const [blogs, setBlogs] = useState(
    [{id:1, title:"Exploring the Wonders of Serendipity", details:"Imagine wandering through the bustling", author:"chatGPT"},
    {id:3, title:"Exploring the Wonders of Serendipity", details:"Imagine wandering through the bustling", author:"chatGPT"},
    {id:2, title:"Exploring the Wonders of Serendipity", details:"Imagine wandering through the bustling", author:"chatGPT"}]
   );
  
    return(
        <Blog_list blogs={blogs} title={"All Blogs"}/>
    );
}

export default Home;