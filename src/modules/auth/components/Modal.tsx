'use client'
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
  image: React.ReactNode;
  message?: string | React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
  onClose?: () => void;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({
  image,
  message,
  buttonText,
  onButtonClick,
  onClose,
  isOpen,
}) => {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isOpen && !buttonText && onClose) {
      timeoutId = setTimeout(() => {
        onClose();
      }, 3000);
    }

    return () => clearTimeout(timeoutId);
  }, [isOpen, buttonText, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#000000] flex flex-col rounded-2xl p-6 w-[90%] max-w-xs shadow-xl text-center"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
          >
            {image && <div className="mb-6 flex justify-center">{image}</div>}

            <div className="mb-6 text-white text-base font-medium">{message}</div>

            {
            buttonText &&
             (
              <button
                onClick={onButtonClick}
                className="bg-[#F5E900] hover:bg-yellow-400 text-black text-base font-semibold py-3 rounded-xl transition w-full"
              >
                {buttonText}
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
