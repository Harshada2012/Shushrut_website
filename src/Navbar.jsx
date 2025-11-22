import './Navbar.css';

export default function Navbar(){
  return(
    <div className="header-navbar">
        <div className="logo">
          <img src="/logo.png" alt="logo" style={{ height: "50px" }} />
          <span className="nav-name"><b>Shushrut <span>System</span> Pvt Ltd</b></span>
        </div>

        <nav className="nav-content">
          <ul className="nav-nav">
            <li><a href="#"><b>Home</b> <i className="fa-solid fa-angle-down"></i></a></li>
            <li><a href="#"><b>About</b> <i className="fa-solid fa-angle-down"></i></a></li>
            <li><a href="#"><b>Services</b> <i className="fa-solid fa-angle-down"></i></a></li>
            <li><a href="#"><b>Products</b> <i className="fa-solid fa-angle-down"></i></a></li>
            <li><a href="#"><b>Gallery</b> <i className="fa-solid fa-angle-down"></i></a></li>
          </ul>
        </nav>
        <button className="nav-btn"><b>Book Appointment</b></button>
      </div>
  );
}