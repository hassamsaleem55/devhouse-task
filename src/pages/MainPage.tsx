import { useState } from "react";
import MainHeader from "../sections/MainHeader";
import MainLanding from "../sections/MainLanding";
import Login from "../components/Login";
import ForgotPassword from "../components/ForgotPassword";
import PasswordResetReqSent from "../components/PasswordResetReqSent";
import ResetPassword from "../components/ResetPassword";

function MainPage() {
  const [modals, setModals] = useState({
    login: false,
    forgotPassword: false,
    passResetReqSent: false,
    resetPassword: false,
  });

  const openModal = (modal: keyof typeof modals) =>
    setModals((prev) => ({ ...prev, [modal]: true }));

  const closeModal = (modal: keyof typeof modals) =>
    setModals((prev) => ({ ...prev, [modal]: false }));

  return (
    <div className="font-basic w-screen h-screen bg-basic text-white flex flex-col">
      <MainHeader openModal={() => openModal("login")} />
      <MainLanding openModal={() => openModal("login")} />
        
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
    </div>
  );
}

export default MainPage;
