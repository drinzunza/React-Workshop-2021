
import "./navBar.css";

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand">My Task Manager</a>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </nav>
     );
}
 
export default NavBar;