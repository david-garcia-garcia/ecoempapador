import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import config from '../config';
import { products } from '../data/products';
import perroMeando from '../images/perro_meando.png';
import moquetaDucha from '../images/moqueta_ducha_limpiar.png';
import cespedAzulEtiqueta from '../images/cesped_azul_etiqueta.png';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize PayPal button when component mounts and SDK is loaded
    const initPayPal = () => {
      const container = document.getElementById('paypal-container-PWWMZXUQPUBMG');
      if (container && window.paypal && window.paypal.HostedButtons) {
        try {
          window.paypal.HostedButtons({
            hostedButtonId: "PWWMZXUQPUBMG",
          }).render("#paypal-container-PWWMZXUQPUBMG");
        } catch (error) {
          console.error('Error initializing PayPal button:', error);
        }
      } else if (!container) {
        // Container not found yet, retry
        setTimeout(initPayPal, 100);
      } else if (!window.paypal) {
        // PayPal SDK not loaded yet, retry
        setTimeout(initPayPal, 100);
      }
    };
    
    // Wait a bit for DOM to be ready
    setTimeout(initPayPal, 100);
  }, []);

  const handleBuyNow = (productId) => {
    navigate(`/checkout/${productId}`);
  };

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg-image" style={{ backgroundImage: `url(${perroMeando})` }}></div>
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
                </div>
              </div>
            ))}
          </div>

          {/* Personalización con Chapa */}
          <div className="personalization-section">
            <h3>✨ Personalización con Chapa</h3>
            <div className="personalization-content">
              <div className="personalization-image">
                <img src={cespedAzulEtiqueta} alt="Empapador con chapa personalizada" />
              </div>
              <div className="personalization-text">
                <p>
                  <strong>¿Quieres personalizar tu empapador?</strong> Ofrecemos la opción de añadir una chapa 
                  personalizada con el nombre de tu mascota o cualquier texto que desees.
                </p>
                <p>
                  La chapa se coloca en el marco del empapador, dándole un toque único y personal. 
                  Perfecto para identificar el empapador de tu perro o como un regalo especial.
                </p>
                <p className="personalization-note">
                  💡 <strong>Nota:</strong> Al realizar tu pedido, puedes especificar el texto que deseas 
                  en la chapa personalizada.
                </p>
              </div>
            </div>
          </div>

          <div className="paypal-button-container">
            <div id="paypal-container-PWWMZXUQPUBMG"></div>
          </div>
        </div>
      </section>

      {/* Quiénes Somos Section */}
      <section id="quienes-somos" className="about-section">
        <div className="section-container">
          <h2>Quiénes Somos</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-intro">
                En <strong>EcoEmpapador</strong>, nos dedicamos a crear soluciones ecológicas y prácticas 
                para el cuidado de tus mascotas. Somos un equipo de amantes de los animales comprometidos 
                con el bienestar de los perros y el medio ambiente.
              </p>
              
              <div className="about-values">
                <div className="value-item">
                  <h3>🌱 Compromiso Ecológico</h3>
                  <p>
                    Creemos en productos reutilizables que reduzcan el desperdicio. Nuestros empapadores 
                    están diseñados para durar años, ayudando a proteger el planeta mientras cuidas a tu mascota.
                  </p>
                </div>
                
                <div className="value-item">
                  <h3>✅ Calidad Garantizada</h3>
                  <p>
                    Utilizamos materiales de primera calidad, probados y resistentes. Todos nuestros productos 
                    están diseñados para ofrecer el mejor rendimiento y durabilidad.
                  </p>
                </div>
                
                <div className="value-item">
                  <h3>💚 Amor por los Animales</h3>
                  <p>
                    Somos dueños de perros como tú. Entendemos las necesidades de tu mascota y diseñamos 
                    productos pensando en su comodidad y bienestar.
                  </p>
                </div>
              </div>

              <div className="guarantee-box">
                <h3>Nuestra Garantía</h3>
                <p>
                  Estamos tan seguros de la calidad de nuestros productos que ofrecemos 
                  <strong> garantía de satisfacción</strong>. Si no estás completamente satisfecho, 
                  te devolvemos tu dinero.
                </p>
              </div>

              <div className="contact-info">
                <h3>¿Tienes Preguntas?</h3>
                <p>
                  Estamos aquí para ayudarte. Si tienes alguna duda sobre nuestros productos o necesitas 
                  asesoramiento, no dudes en contactarnos. Tu satisfacción es nuestra prioridad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
