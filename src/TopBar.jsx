import "./TopBar.css";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="top-left">
        <span><i className="fa-solid fa-location-dot"></i> Maharashtra, India</span>
        <span><i className="fa-solid fa-envelope"></i> ceodesk@shushrut.com</span>
        <span><i className="fa-solid fa-phone"></i> +91 99230 48739</span>
      </div>

      <div className="top-right">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-instagram"></i>
      </div>
    </div>
  );
}