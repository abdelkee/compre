import Button from "../components/Button";
import { MdPayments, MdOutlineSell, MdPriceCheck } from "react-icons/md";

function Header() {
  return (
    <header className="header-style">
      <div className="grid w-10 h-10 font-semibold text-purple-800 rotate-45 bg-purple-300 rounded-sm place-items-center">
        <p className="-rotate-45">20</p>
      </div>
      <div className="flex items-center space-x-2">
        <p className="font-semibold text-green-900">$ 32.50</p>
        <Button shape={"square"} execute={"openOrderModal"}>
          <MdPayments size={"24px"} />
        </Button>
      </div>
    </header>
  );
}

export default Header;
