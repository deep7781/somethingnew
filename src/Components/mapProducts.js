import lamp from "../Assets/lamp.png";
import chair from "../Assets/chair.jpg";
import vase from "../Assets/vase.png";
import pot from "../Assets/pot.png";
import chair2 from "../Assets/chair2.png";
import chair3 from "../Assets/chair3.png";
import pot2 from "../Assets/pot2.png";
import table from "../Assets/Photo.png";
import lamp2 from "../Assets/lamp2.png";
const priceRanges = ["0-99", "100-199", "200-299", "300+"];
const mapProducts = [
  {
    id: "chair1",
    image: chair,
    category: "Furniture",
    name: "The Dandy chair",
    artist: "Robert Smith",
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
    artist: "Robert Smith",
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
    artist: "Robert Smith",
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
    artist: "Liam Gallagher",
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
    artist: "Liam Gallagher",
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
    id: "lamp2",
    quantity: 1,
    category: "Light Fittings",
    image: lamp2,
    artist: "Biggie Smalls",
    name: "The Lucy Lamp",
    price: 259,
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
    artist: "Biggie Smalls",
    name: "The Lucy Lamp",
    price: 159,
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
    artist: "Biggie Smalls",
    name: "The Lucy Lamp",
    price: 299,
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
    artist: "Thom Yorke",
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
    artist: "Thom Yorke",
    category: "Furniture",
    name: "The Lucy Lamp",
    price: 39,
    description:
      "A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.",
    height: "110cm",
    width: "75cm",
    depth: "50cm",
  },
];

const art = new Set();
for (let i = 0; i < mapProducts.length; i++) {
  art.add(mapProducts[i].artist);
}
export const artist = Array.from(art);

const productsPrice = mapProducts.map((item) => {
  const price = item.price;
  const priceRange =
    price < 100
      ? "0-99"
      : price < 200
      ? "100-199"
      : price < 300
      ? "200-299"
      : "300+";
  return { ...item, priceRange };
});

const proSet = new Set();

for (let i = 0; i < mapProducts.length; i++) {
  proSet.add(mapProducts[i].category);
}

export const category = Array.from(proSet);

export { productsPrice as mapProducts, priceRanges };
