import modeloAzul from '../images/modelo_azul_sinchapa.png';
import modeloNegro from '../images/modelo_negro_sinchapa.png';
import modeloRojo from '../images/modelo_rojo_sinchapa.png';

export const products = [
  {
    id: 1,
    name: 'Empapador Modelo Césped Artificial Verde',
    price: 50,
    image: modeloRojo,
    description: 'Empapador reutilizable con moqueta plástica y relleno de césped artificial verde. Lavable y duradero.',
    category: 'Empapadores',
    model: 'Césped Verde',
  },
  {
    id: 2,
    name: 'Empapador Modelo Negro',
    price: 30,
    image: modeloNegro,
    description: 'Empapador reutilizable con moqueta plástica negra. Diseño elegante y funcional, fácil de limpiar.',
    category: 'Empapadores',
    model: 'Negro',
  },
  {
    id: 3,
    name: 'Empapador Modelo Césped Artificial Celeste',
    price: 60,
    image: modeloAzul,
    description: 'Empapador reutilizable con moqueta plástica y relleno de césped artificial celeste. Absorbente y resistente.',
    category: 'Empapadores',
    model: 'Césped Celeste',
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === parseInt(id));
}
