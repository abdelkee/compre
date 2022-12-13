import { ReactNode } from "react";
import { MdOutlineClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

type ModalProps = {
  children: ReactNode;
  title: string;
  onClose: Function;
  isOpen: boolean;
};

function Modal({ children, title, onClose, isOpen }: ModalProps) {
  if (isOpen) document.body.style.overflow = "hidden";
  const closeModal = () => {
    document.body.style.overflow = "auto";
    onClose();
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 grid w-screen h-screen bg-black/30 backdrop-blur-sm place-items-center"
        >
          <div className="flex overflow-scroll flex-col w-11/12 h-3/4 max-w-[400px] relative bg-gradient-to-b from-green-800 to-green-900 rounded shadow-md p-6">
            <button
              className="absolute text-white top-4 right-4"
              onClick={closeModal}
            >
              <MdOutlineClose size={"24px"} />
            </button>
            {/* Header */}
            <section className="grid pb-4 border-b place-items-center border-b-gray-300">
              <h2 className="text-2xl font-bold text-white">{title}</h2>
            </section>
            <section className="flex-1 pt-12">{children}</section>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
