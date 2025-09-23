import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Modal from "../components/Modal";

function Login({
  isModalOpen,
  closeModal,
  forgotPasswordClick,
}: {
  isModalOpen: boolean;
  closeModal: () => void;
  forgotPasswordClick: () => void;
}) {
  const [formFields, setFormFields] = useState([
    {
      label: "Username or Email*",
      type: "text",
      value: "",
    },
    {
      label: "Password*",
      type: "password",
      value: "",
    },
  ]);

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (index: number, newValue: string) => {
    const updatedFields = [...formFields];
    updatedFields[index].value = newValue;
    setFormFields(updatedFields);
  };

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <h2 className="text-black text-5xl font-semibold mb-6">Login</h2>
      <div className="space-y-8 mt-10">
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

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="accent-primary rounded" // primary color for checkbox
            />
            <span className="text-gray-600">Remember me</span>
          </label>
          <button
            type="button"
            className="text-primary hover:underline cursor-pointer"
            onClick={forgotPasswordClick}
          >
            Forgot my password
          </button>
        </div>

        <button
          type="button"
          className="w-full bg-black text-white cursor-pointer mt-4 py-3 rounded-4xl font-semibold hover:opacity-90 transition"
        >
          Login
        </button>
      </div>
    </Modal>
  );
}

export default Login;
