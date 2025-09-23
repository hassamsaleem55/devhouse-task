const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>

      {/* Modal Box */}
      <div className="relative bg-white p-8 rounded-lg shadow-2xl max-w-xl w-full z-10">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-400 text-3xl cursor-pointer"
          >
            &times;
          </button>
        </div>
        <div className="px-8 pt-8 pb-16">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
