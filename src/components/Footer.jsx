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
          
          <div className="footer-section">
            <h4>Datos Legales</h4>
            <p>
              Profesional Consulting<br />
              ES44124351R<br />
              08780 Palleja<br />
              Barcelona<br />
              <a href="mailto:gestion@empapador.com">gestion@empapador.com</a>
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          {/* Trustpilot Widget */}
          <div className="trustpilot-widget-container">
            <div 
              className="trustpilot-widget" 
              data-locale="es-ES" 
              data-template-id="56278e9abfbbba0bdcd568bc" 
              data-businessunit-id="695aa8a5915d546cd61f9311" 
              data-style-height="52px" 
              data-style-width="100%" 
              data-token="7aa961af-9c41-4ee4-9587-8553f7a8babf"
            >
              <a href="https://es.trustpilot.com/review/empapador.com" target="_blank" rel="noopener">Trustpilot</a>
            </div>
          </div>
          <p>&copy; {new Date().getFullYear()} EcoEmpapador. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
