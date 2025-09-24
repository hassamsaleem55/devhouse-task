import { Button } from "../components/Form";
import Modal from "../components/Modal";

function PasswordResetReqSent({
  isModalOpen,
  closeModal,
  resetNowClick,
}: {
  isModalOpen: boolean;
  closeModal: () => void;
  resetNowClick: () => void;
}) {
  return (
    <Modal
      title="Password Reset Request Sent"
      isOpen={isModalOpen}
      onClose={closeModal}
    >
      <div className="space-y-16 sm:space-y-20">
        <div className="text-xxs sm:text-xs text-gray-700">
          <p>
            A password reset message was sent to your email address.
            <br />
            Please click the link in that message to reset your password.
          </p>
        </div>

        <Button text="Reset Now" bgColor="black" clickEvent={resetNowClick} />
      </div>
    </Modal>
  );
}

export default PasswordResetReqSent;
