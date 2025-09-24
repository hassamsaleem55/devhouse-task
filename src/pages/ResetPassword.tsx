import { useState } from "react";
import Modal from "../components/Modal";
import { FormInput, FormButton } from "../components/Form";

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
    { label: "New Password*", type: "password", value: "" },
    { label: "Confirm New Password*", type: "password", value: "" },
  ]);

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
    <Modal
      title="Reset Your Password"
      isOpen={isModalOpen}
      onClose={closeModal}
    >
      <div className="space-y-6">
        {formFields.map((item, index) => (
          <FormInput
            key={index}
            item={item}
            changeEvent={(e: any) => handleChange(index, e.target.value)}
          />
        ))}
      </div>
      <div className="space-y-12 mt-4">
        <div className="text-xxs">
          <h3 className="text-black font-medium">Your password must:</h3>
          <div className="text-[9px] text-gray-500 ml-2">
            {passwordRequirements.map((req, idx) => (
              <p key={idx}>{req}</p>
            ))}
          </div>
        </div>

        <FormButton text="Reset" bgColor="black" clickEvent={resetClick} />
      </div>
    </Modal>
  );
}

export default ResetPassword;
