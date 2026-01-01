import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>EcoEmpapador</h4>
            <p>Empapadores reutilizables para perros</p>
          </div>
          
          <div className="footer-section">
            <h4>Legal</h4>
            <nav className="footer-nav">
              <Link to="/aviso-legal">Aviso Legal</Link>
              <Link to="/privacidad">Política de Privacidad</Link>
              <Link to="/cookies">Política de Cookies</Link>
              <Link to="/terminos">Términos y Condiciones</Link>
            </nav>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} EcoEmpapador. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
