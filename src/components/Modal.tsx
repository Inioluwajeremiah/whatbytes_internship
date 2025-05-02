import React, { ReactNode, useState } from "react";

interface ModalProps {
  children: ReactNode;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, closeModal }) => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "modalWrapper") {
      setShowModal(false);
      closeModal();
      window.speechSynthesis.cancel();
    }
  };
  if (!showModal) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0  w-screen h-screen bg-black/30 z-10">
      <div
        id="modalWrapper"
        onClick={(e) => handleCloseModal(e)}
        className=" flex flex-row lg:flex-row items-start justify-center w-full h-full"
      >
        {/* modal dialog */}
        <div className="relative w-[80%] md:w-[65%] lg:w-[45%] max-h-[80%] h-fit flex flex-col justify-center items-center mt-28">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
