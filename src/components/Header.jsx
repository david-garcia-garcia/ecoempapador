import { Link } from 'react-router-dom';
import './Header.css';

function Header({ siteName = 'E-Shop' }) {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>{siteName}</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Inicio</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
