import { useState, useEffect } from "react";
import Blog_list from "./blog_list";
const Home = () => {
    
   const [name, setName] = useState("Mario")
    const [blogs, setBlogs] = useState(
    [{id:1, title:"Exploring the Wonders of Serendipity", details:"Imagine wandering through the bustling", author:"John"},
    {id:3, title:"Exploring the Wonders of Serendipity", details:"Imagine wandering through the bustling", author:"Maric"},
    {id:2, title:"Exploring the Wonders of Serendipity", details:"Imagine wandering through the bustling", author:"Lucy"}]
   );

    useEffect(()=> {
        console.log("Name changed")
        
    },[name]);
    //use dependicies whenever page load , use effect is load defaul, but after that when we click on change the but
    // at that time useEffect will run again.


    return(
        <div className="home">
        <Blog_list blogs={blogs} title={"All Blogs"}/>
        <Blog_list blogs={blogs.filter((blog)=> blog.author === 'Lucy')} title={"Lucy's Blog"}/>
        <p>{name}</p>
        <button onClick={()=>setName("Rahul")}>Change the name</button>
       
        </div>
    );
}

export default Home;