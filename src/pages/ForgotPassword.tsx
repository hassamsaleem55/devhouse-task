import { useState } from "react";
import Modal from "../components/Modal";

function ForgotPassword({
  isModalOpen,
  closeModal,
  resetPasswordClick,
}: {
  isModalOpen: boolean;
  closeModal: () => void;
  resetPasswordClick: () => void;
}) {
  const [formFields, setFormFields] = useState([
    {
      label: "Email*",
      type: "text",
      value: "",
    },
  ]);

  const handleChange = (index: number, newValue: string) => {
    const updatedFields = [...formFields];
    updatedFields[index].value = newValue;
    setFormFields(updatedFields);
  };

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <div className="py-4">
        <h2 className="text-black text-5xl font-semibold mb-6">
          Forgot Your Password?
        </h2>
        <div className="space-y-8 mt-10">
          <h2 className="text-sm text-gray-700">
            Enter your email address and we'll send you a reset link۔
          </h2>
          {formFields.map((item, index) => (
            <div key={index} className="flex flex-col relative">
              <label className="mb-1 text-sm font-medium text-gray-500">
                {item.label}
              </label>
              <input
                type={item.type}
                className="w-full border border-gray-300 rounded-4xl py-2 px-4 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
                value={item.value}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            </div>
          ))}

          <button
            type="button"
            className="w-full bg-black text-white cursor-pointer mt-4 py-3 rounded-4xl font-semibold hover:opacity-90 transition"
            onClick={resetPasswordClick}
          >
            Send
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ForgotPassword;
