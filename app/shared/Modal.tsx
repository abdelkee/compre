import { ReactNode } from "react";
import { MdOutlineClose } from "react-icons/md";
import Button from "./Button";

type ModalProps = {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  onClose: Function;
};

function Modal({ children, title, isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;
  return (
    <>
      <div className="fixed inset-0 z-40 grid w-screen h-screen bg-black/30 backdrop-blur-sm place-items-center">
        <div className="flex flex-col w-11/12 h-3/4 max-w-[400px] relative bg-green-900 rounded shadow-md p-6">
          <button
            className="absolute text-white top-4 right-4"
            onClick={() => onClose()}
          >
            <MdOutlineClose size={"24px"} />
          </button>
          {/* Header */}
          <section className="grid pb-4 border-b place-items-center border-b-gray-300">
            <h2 className="text-2xl font-bold text-white">{title}</h2>
          </section>
          <section className="flex-1 pt-12">{children}</section>
        </div>
      </div>
    </>
  );
}

export default Modal;
