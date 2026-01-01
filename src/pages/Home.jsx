import { useNavigate } from 'react-router-dom';
import config from '../config';
import { products } from '../data/products';
import perroMeando from '../images/perro_meando.png';
import moquetaDucha from '../images/moqueta_ducha_limpiar.png';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleBuyNow = (productId) => {
    navigate(`/checkout/${productId}`);
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>{config.heroTitle}</h1>
          <p className="hero-subtitle">{config.heroSubtitle}</p>
          <p className="hero-description">
            Empapadores reutilizables hechos de moqueta plástica 
            con diferentes modelos de relleno. Lavables, duraderos y ecológicos.
          </p>
          <button 
            className="scroll-to-models-btn"
            onClick={() => {
              document.getElementById('modelos').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Ver Modelos
          </button>
        </div>
      </section>

      {/* ¿Cómo funciona? Section */}
      <section id="como-funciona" className="how-it-works-section">
        <div className="section-container">
          <h2>¿Cómo funciona?</h2>
          <p className="section-intro">
            Nuestros empapadores son reutilizables y fáciles de mantener. 
            Una solución práctica y ecológica para tu mascota.
          </p>

          <div className="how-it-works-steps">
            <div className="step">
              <div className="step-image">
                <img 
                  src={perroMeando} 
                  alt="Perro usando empapador"
                />
              </div>
              <h3>1. El perro mea en el empapador</h3>
              <p>Totalmente estanco y sin olores. El empapador absorbe la orina de forma eficiente gracias a la moqueta plástica y el relleno.</p>
            </div>

            <div className="step">
              <div className="step-image">
                <img 
                  src={moquetaDucha} 
                  alt="Lavar empapador en la ducha"
                />
              </div>
              <h3>2. Limpieza periódica</h3>
              <p>
                Dependiendo del tamaño del perro: una vez a la semana para perros pequeños 
                y una vez cada tres días para perros grandes. Enguájalo en la ducha con limpiador.
              </p>
            </div>
          </div>

          <div className="video-section">
            <h3>Videos de demostración</h3>
            <div className="video-placeholder">
              <p>📹 Video: Perros usando los empapadores</p>
              <p className="video-note">(Aquí puedes agregar videos de YouTube o Vimeo)</p>
            </div>
          </div>

          <div className="benefits-box">
            <h3>Ventajas de nuestros empapadores</h3>
            <ul>
              <li>✅ <strong>Reutilizable:</strong> Lávalo y úsalo una y otra vez</li>
              <li>✅ <strong>Ecológico:</strong> Reduce el desperdicio de empapadores desechables</li>
              <li>✅ <strong>Económico:</strong> Una inversión que dura mucho tiempo</li>
              <li>✅ <strong>Fácil de limpiar:</strong> Solo agua y lejía o nuestro desinfectante</li>
              <li>✅ <strong>Resistente:</strong> Moqueta plástica de alta calidad</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Nuestros Modelos Section */}
      <section id="modelos" className="models-section">
        <div className="section-container">
          <h2>Nuestros Modelos</h2>
          <p className="section-intro">
            Elige el modelo que mejor se adapte a tu hogar y a tu mascota
          </p>

          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card-landing">
                <div className="product-image-landing">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info-landing">
                  <span className="product-model">{product.model}</span>
                  <h3>{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-price-landing">
                    {product.price}€
                  </div>
                  <button 
                    className="buy-now-btn-landing"
                    onClick={() => handleBuyNow(product.id)}
                  >
                    {config.buyButtonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
