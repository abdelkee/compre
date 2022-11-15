import ProductCard from "./ProductCard";

export const data = [
  "enero febrero hadak",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
];

function ProductsList() {
  return (
    <section className="grid grid-cols-2 gap-4">
      {data.map((product) => (
        <ProductCard product={product} />
      ))}
    </section>
  );
}

export default ProductsList;
