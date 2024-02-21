import lamp from "../Assets/lamp.png";
import chair from "../Assets/chair.jpg";
import vase from "../Assets/vase.png";
import pot from "../Assets/pot.png";
import chair2 from "../Assets/chair2.png";
import chair3 from "../Assets/chair3.png";
import pot2 from "../Assets/pot2.png";
import table from "../Assets/Photo.png";
import lamp2 from "../Assets/lamp2.png";

const mapProducts = [
  {
    id: "chair1",
    image: chair,
    category: "Furniture",
    name: "The Dandy chair",
    price: 250,
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    height: "110cm",
    width: "75cm",
    depth: "50cm",
    quantity: 1,
  },
  {
    id: "vase1",
    category: "Homeware",
    quantity: 1,
    image: pot,
    name: "Rustic Vase Set",
    price: 155,
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    height: "110cm",
    width: "75cm",
    depth: "50cm",
  },
  {
    id: "vase2",
    category: "Homeware",
    quantity: 1,
    image: vase,
    name: "The Silky Vase",
    price: 125,
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    height: "110cm",
    width: "75cm",
    depth: "50cm",
  },
  {
    id: "lamp1",
    quantity: 1,
    image: lamp,
    category: "Light Fittings",
    name: "The Lucy Lamp",
    price: 399,
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    height: "110cm",
    width: "75cm",
    depth: "50cm",
  },
  {
    id: "chair2",
    quantity: 1,
    image: chair2,
    category: "Sofas",
    name: "The Lucy Lamp",
    price: 399,
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    height: "110cm",
    width: "75cm",
    depth: "50cm",
  },
  {
    id: "lamp2",
    quantity: 1,
    category: "Light Fittings",
    image: lamp2,
    name: "The Lucy Lamp",
    price: 399,
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    height: "110cm",
    width: "75cm",
    depth: "50cm",
  },
  {
    id: "chair3",
    quantity: 1,
    image: chair3,
    category: "Furniture",
    name: "The Lucy Lamp",
    price: 399,
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    height: "110cm",
    width: "75cm",
    depth: "50cm",
  },
  {
    id: "pot2",
    quantity: 1,
    image: pot2,
    category: "Accessories",
    name: "The Lucy Lamp",
    price: 399,
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    height: "110cm",
    width: "75cm",
    depth: "50cm",
  },
  {
    id: "table",
    quantity: 1,
    image: table,
    category: "Furniture",
    name: "The Lucy Lamp",
    price: 399,
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    height: "110cm",
    width: "75cm",
    depth: "50cm",
  },
  {
    id: "table1",
    quantity: 1,
    image: table,
    category: "Fenil",
    name: "The Lucy Lamp",
    price: 399,
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    height: "110cm",
    width: "75cm",
    depth: "50cm",
  },
];
const proSet = new Set();

for (let i = 0; i < mapProducts.length; i++) {
  proSet.add(mapProducts[i].category);
}

export const category = Array.from(proSet);
export default mapProducts;
