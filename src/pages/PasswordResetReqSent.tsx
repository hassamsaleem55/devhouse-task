import Modal from "../components/Modal";

function ForgotPassword({
  isModalOpen,
  closeModal,
  resetNowClick,
}: {
  isModalOpen: boolean;
  closeModal: () => void;
  resetNowClick: () => void;
}) {
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <div className="pt-2 pb-4">
        <h2 className="text-black text-5xl font-semibold mb-6">
          Password Reset Request Sent
        </h2>
        <div className="space-y-20 mt-12">
          <h2 className="text-sm text-gray-700">
            A password reset message was sent to your email address.
            <br />
            Please click the link in that message to reset password
          </h2>

          <button
            type="button"
            className="w-full bg-black text-white cursor-pointer py-3 rounded-4xl font-semibold hover:opacity-90 transition"
            onClick={resetNowClick}
          >
            Reset Now
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ForgotPassword;
