import Image from "next/image";
import { MdAddShoppingCart } from "react-icons/md";
import Button from "./components/Button";

function ProductCard({ product }: { product: string }) {
  return (
    <div className="overflow-hidden bg-white border border-gray-300 rounded shadow-md">
      <div className="w-full h-[160px]">
        <Image alt="" src={""} className={"w-full h-full object-cover"} />
      </div>
      <div className="w-full p-2">
        <p className="truncate">{product}</p>
        <p>$ 4.69</p>
      </div>
      <Button shape={"long2"} execute={"openOrderModal"}>
        <MdAddShoppingCart />
      </Button>
    </div>
  );
}

export default ProductCard;
