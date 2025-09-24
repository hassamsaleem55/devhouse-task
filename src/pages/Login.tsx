import { useState } from "react";
import Modal from "../components/Modal";
import { FormInput, FormButton } from "../components/Form";

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
    { label: "Username or Email*", type: "text", value: "" },
    { label: "Password*", type: "password", value: "" },
  ]);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (index: number, newValue: string) => {
    const updatedFields = [...formFields];
    updatedFields[index].value = newValue;
    setFormFields(updatedFields);
  };

  return (
    <Modal title="Login" isOpen={isModalOpen} onClose={closeModal}>
      <div className="space-y-6">
        {formFields.map((item, index) => (
          <FormInput
            key={index}
            item={item}
            changeEvent={(e: any) => handleChange(index, e.target.value)}
          />
        ))}

        <div className="flex flex-row items-center justify-between text-xxs mb-10">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="accent-primary rounded"
            />
            <span className="text-gray-700">Remember me</span>
          </label>
          <button
            type="button"
            className="text-primary hover:underline cursor-pointer"
            onClick={forgotPasswordClick}
          >
            Forgot my password
          </button>
        </div>

        <FormButton text="Login" bgColor="black" />
      </div>
    </Modal>
  );
}

export default Login;
