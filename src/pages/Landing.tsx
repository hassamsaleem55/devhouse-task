import { useOutletContext } from "react-router";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import PasswordResetReqSent from "./PasswordResetReqSent";
import ResetPassword from "./ResetPassword";

type ModalKeys = "login" | "forgotPassword" | "passResetReqSent" | "resetPassword";

interface OutletContext {
  modals: Record<ModalKeys, boolean>;
  openModal: (modal: ModalKeys) => void;
  closeModal: (modal: ModalKeys) => void;
}

function Landing() {
  const { modals, openModal, closeModal } = useOutletContext<OutletContext>();

  return (
    <>
      <Login
        isModalOpen={modals.login}
        closeModal={() => closeModal("login")}
        forgotPasswordClick={() => openModal("forgotPassword")}
      />
      <ForgotPassword
        isModalOpen={modals.forgotPassword}
        closeModal={() => closeModal("forgotPassword")}
        resetPasswordClick={() => openModal("passResetReqSent")}
      />
      <PasswordResetReqSent
        isModalOpen={modals.passResetReqSent}
        closeModal={() => {
          closeModal("passResetReqSent");
          closeModal("forgotPassword");
        }}
        resetNowClick={() => openModal("resetPassword")}
      />
      <ResetPassword
        isModalOpen={modals.resetPassword}
        closeModal={() => closeModal("resetPassword")}
        resetClick={() => {
          closeModal("resetPassword");
          closeModal("passResetReqSent");
          closeModal("forgotPassword");
        }}
      />
    </>
  );
}

export default Landing;
