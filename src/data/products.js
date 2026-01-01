import cespedAzulEtiqueta from '../images/cesped_azul_etiqueta.png';

export const products = [
  {
    id: 1,
    name: 'Empapador Modelo Césped Artificial Verde',
    price: 50,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500',
    description: 'Empapador reutilizable con moqueta plástica y relleno de césped artificial verde. Lavable y duradero.',
    category: 'Empapadores',
    model: 'Césped Verde',
  },
  {
    id: 2,
    name: 'Empapador Modelo Negro',
    price: 30,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=500',
    description: 'Empapador reutilizable con moqueta plástica negra. Diseño elegante y funcional, fácil de limpiar.',
    category: 'Empapadores',
    model: 'Negro',
  },
  {
    id: 3,
    name: 'Empapador Modelo Césped Artificial Celeste',
    price: 60,
    image: cespedAzulEtiqueta,
    description: 'Empapador reutilizable con moqueta plástica y relleno de césped artificial celeste. Absorbente y resistente.',
    category: 'Empapadores',
    model: 'Césped Celeste',
  },
  {
    id: 4,
    name: 'Desinfectante para Empapadores',
    price: 12,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500',
    description: 'Desinfectante especial para limpiar y desinfectar tus empapadores. Elimina olores y bacterias.',
    category: 'Accesorios',
    model: 'Desinfectante',
  },
];

export function getProductById(id) {
  return products.find((p) => p.id === parseInt(id));
}
