import { useState } from "react";
import Modal from "../components/Modal";
import { FormInput, FormButton } from "../components/Form";

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
    { label: "Email*", type: "text", value: "" },
  ]);

  const handleChange = (index: number, newValue: string) => {
    const updatedFields = [...formFields];
    updatedFields[index].value = newValue;
    setFormFields(updatedFields);
  };

  return (
    <Modal
      title="Forgot Your Password?"
      isOpen={isModalOpen}
      onClose={closeModal}
    >
      <p className="text-xxs sm:text-xs text-gray-700 mb-6">
        Enter your email address and we'll send you a reset link.
      </p>
      <div className="space-y-6 sm:space-y-10">
        {formFields.map((item, index) => (
          <FormInput
            key={index}
            item={item}
            changeEvent={(e: any) => handleChange(index, e.target.value)}
          />
        ))}

        <FormButton text="Send" bgColor="black" clickEvent={resetPasswordClick} />
      </div>
    </Modal>
  );
}

export default ForgotPassword;
