import './Nav.css';

const Nav =()=>{
    return(
    <>
    <nav className="navbar">
  <ul className="nav-list">
    <li className="nav-item logo"><a href="#">Twitter</a></li>
    <li className="nav-item"><a href="#">Home</a></li>
    <li className="nav-item"><a href="#">Explore</a></li>
    <li className="nav-item"><a href="#">Notifications</a></li>
    <li className="nav-item"><a href="#">Messages</a></li>
    <li className="nav-item"><a href="#">Bookmarks</a></li>
    <li className="nav-item"><a href="#">Lists</a></li>
    <li className="nav-item"><a href="#">Profile</a></li>
    <li className="nav-item"><a href="#">More</a></li>
    <li className="nav-item search"><input type="text" placeholder="Search Twitter"/></li>
  </ul>
</nav>

    </>
        
    );
}
export default Nav;