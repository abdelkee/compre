export const data = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
];

function ProductsList() {
  return (
    <>
      {data.map((name) => (
        <li>{name}</li>
      ))}
    </>
  );
}

export default ProductsList;
