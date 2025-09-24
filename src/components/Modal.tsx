function Modal({
  title,
  isOpen,
  onClose,
  children,
}: {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose}></div>
      <div className="relative bg-white p-4 rounded-xl max-w-lg w-full z-10">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-400 text-3xl cursor-pointer"
          >
            &times;
          </button>
        </div>
        <div className="px-8 sm:px-12 pt-10 pb-18">
          <h2 className="text-black text-3xl sm:text-3xl font-semibold mb-8">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
