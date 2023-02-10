import { Link } from 'react-router-dom';

import './navbar.css'
import { logo } from '../imagesdep';
function Navbar(){
/*   const handelchange=()=>{
    let links=document.querySelectorAll(".nav-link");
    console.log(links);
    links.forEach(function(li){
      li.onClick=function(){
        console.log(li)
        links.forEach(function(lin){
          lin.classList.remove("active");
        })
        li.classList.add("active");
      }
    })
  } */
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid nav-container">
    <Link className="navbar-brand logo" to="/">
      <img src={logo} alt="logo" />
    </Link>
    <div className="collapse navbar-collapse links" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 links">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/explorepage'} >Explore</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/details">Item Details</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/author">Author</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/creat" >Creat Yours</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
export default Navbar;