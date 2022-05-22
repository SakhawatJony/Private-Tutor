import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
  const {user,logOut} = useFirebase();
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" >
  <div class="container">
    <a class="navbar-brand fw-bold" style={{color:'#990000'}}>Personal Tutor</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/" class='text-decoration-none fw-bold' ><a style={{color:'#990000'}} class="nav-link">Home</a></Link> 
        </li>
        <li class="nav-item">
        <Link class='text-decoration-none fw-bold' to="/blog"> <a style={{color:'#990000'}} class="nav-link" href="#">Blogs</a> </Link>
        </li>
        <li class="nav-item">
        <Link class='text-decoration-none fw-bold' to="/about"><a style={{color:'#990000'}} class="nav-link" href="#">About</a></Link>
        </li>
        <li class="nav-item">
        <Link to="/login" class='text-decoration-none fw-bold' ><a style={{color:'#990000'}} class="nav-link">Login</a></Link> 
        </li>
        {

user?.email?
<div class="mx-2 text-black fw-bold"   >
  {user.displayName}
  <img style={{height:'50px',width:'50px'}} className="rounded-circle ms-3" src={user.photoURL} alt="" />

  <button style={{background:'#990000',color:'#ffff'}} class="btn  ms-2 fw-bold" onClick={logOut}>LogOut</button>
</div> : <div class="d-flex">
</div>

}
       
        
      </ul>
      
    </div>
  </div>
</nav>
            
        </>
    );
};

export default Header;