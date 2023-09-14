import React from "react";
import { Link } from "react-router-dom";
import './Header.css';



function Header()
{

    return <> 
<header>
    
   <ul>
        <Link to="/"> 
       <li>
       Home
       </li>
            
       
        </Link>
       
        <Link to="/calc"> 
        
           <li> Calc</li>
       
        </Link>
       
        </ul>
        </header>
    
    </>;
}

export default Header;