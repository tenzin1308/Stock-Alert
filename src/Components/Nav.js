import React from 'react'
import "./Style.css";
import Bell from "./icon/bell.svg"; 
import Trending from "./icon/trending.svg"; 
import Logo from "./icon/logo.ico"; 
import { Link } from 'react-router-dom';
import { useState } from "react";

export const Nav = () => {
    
    const [search, setSearch] = useState('');

    const navStyle = {
        color: 'white'
    }
    const handelChange = e =>{
        setSearch(e.target.value);
      };
  return (
    <nav>
        <Link style={navStyle} to="/home">
            <img src={Logo} alt="bell" className="icon"/>
        </Link>
        <ul className="nav-link">
            <Link style={navStyle} to='/alert'>
                <li><img src={Bell} alt="bell" className="icon"/></li>
            </Link>
            <Link style={navStyle} to='/hotstocks'>
                <li><img src={Trending} alt="treding" className="icon"/></li>
            </Link>
        </ul>
    </nav>
    
  );
}
