import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
//import Fashion from './Fashion'

/*import Tv from './Tv'
import Mobile from './Mobile'
import Toys  from './Toys'
import Supermarket  from './Supermarket'
import Home  from './Home'
import Sports  from './Sports'
import {Route} from "react-router-dom"*/
import './Css.css'
 class Categories extends Component {
    render() {
        return (
            <nav  className="nav.wrapper grey darken-1 " className="color"> 
            <div className="container " >
            <ul className="">
            <li><NavLink className="link" to="/component/Links/All">All Categories</NavLink> </li>
            <li><NavLink className="link" to="/fashion/Fashion">fashion</NavLink> </li>
            <li> <NavLink className="link" to="/component/Links/Super">Supermarket</NavLink></li> 
               <li><NavLink className="link" to="/mobile/Mobile">Mobile</NavLink> </li>
               <li><NavLink className="link" to="/component/Links/Tv">Tv</NavLink> </li>
               <li><NavLink className="link" to="/component/Links/Home">Home</NavLink> </li>
              <li> <NavLink className="link" to="/Toys">Toys</NavLink> </li>
               <li><NavLink className="link" to="/Sports">Sports</NavLink> </li> 
            </ul>
            </div>
            </nav>
        )
    }
}

export default Categories
