import { useState } from "react";

const Home = () => {
    
    /*
    //click event & pass value on click event
    const handleClick = () => {
        console.log("Hello this is click one");
    }
     using anoumous function click event 
    const handleClickAgain = (name) => {
        console.log("this is click again function with my name is " + name)
    }
    */

    const [Name,setName] = useState("Rahul")
    const [Age,setAge] = useState(25)

    const handleClick = () => {
        setName('Rony');
        setAge(30);
    }
  
    return(
        <div className="home">
            <h1>Home</h1>
            <button onClick={handleClick} >click me</button>
            <p>My name is {Name} and my age is {Age}</p>
        </div>
    );
}

export default Home;