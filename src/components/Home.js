import React from "react";
import './Home.css';
import { useNavigate } from "react-router-dom";
function Home(){


    const navigate=useNavigate();
 const handler=()=>{
navigate("/calc");
 };

    return <> 
    <div className="home">
         <h1 > Welcome to Home </h1>
         <h4 >Want to calculate  <button onClick={handler}> Click Here</button></h4>
  
        </div> 
    </>;
}

export default Home;