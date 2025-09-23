import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Modal from "../components/Modal";

function ResetPassword({
  isModalOpen,
  closeModal,
  resetClick,
}: {
  isModalOpen: boolean;
  closeModal: () => void;
  resetClick: () => void;
}) {
  const [formFields, setFormFields] = useState([
    {
      label: "New Password*",
      type: "password",
      value: "",
    },
    {
      label: "Confirm New Password*",
      type: "password",
      value: "",
    },
  ]);

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (index: number, newValue: string) => {
    const updatedFields = [...formFields];
    updatedFields[index].value = newValue;
    setFormFields(updatedFields);
  };

  const passwordRequirements = [
    "Be minimum of 8 characters",
    "Include at least one uppercase letter",
    "Include at least one number",
    "Include at least one symbol",
    "Cannot match your email address",
  ];

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <h2 className="text-black text-5xl font-semibold mb-6">
        Reset Your Password
      </h2>

      <div className="space-y-8 mt-10">
        {/* Password Fields */}
        {formFields.map((item, index) => (
          <div key={index} className="flex flex-col relative">
            <label className="mb-1 text-sm font-medium text-gray-500">
              {item.label}
            </label>
            <input
              type={
                item.type === "password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : item.type
              }
              className="w-full border border-gray-300 rounded-4xl py-2 px-4 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
              value={item.value}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            {item.type === "password" && (
              <button
                type="button"
                className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <Eye className="text-primary cursor-pointer" size={20} />
                ) : (
                  <EyeOff className="text-primary cursor-pointer" size={20} />
                )}
              </button>
            )}
          </div>
        ))}

        {/* Password Requirements */}
        <div className="text-small">
          <h2>Your password must:</h2>
          <div className="ml-1 text-gray-500">
            {passwordRequirements.map((req, idx) => (
              <p key={idx} className="flex items-start">
                <span>{req}</span>
              </p>
            ))}
          </div>
        </div>

        {/* Reset Button */}
        <button
          type="button"
          className="w-full bg-black text-white cursor-pointer mt-4 py-3 rounded-4xl font-semibold hover:opacity-90 transition"
          onClick={resetClick}
        >
          Reset
        </button>
      </div>
    </Modal>
  );
}

export default ResetPassword;
