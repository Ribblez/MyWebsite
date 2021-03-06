import './NavBar.css';
import '../index.css';

function NavBar() {
  return (
    <nav className="Navbar">
      <div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      </div>
    </nav>
  );
}

export default NavBar;
