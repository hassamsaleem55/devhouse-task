import { useState } from "react";
import CompanyLogo from "../components/CompanyLogo";
import { FormButton } from "../components/Form";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import PasswordResetReqSent from "./PasswordResetReqSent";
import ResetPassword from "./ResetPassword";

function Landing() {
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
    <>
      <div className="w-screen h-screen bg-basic text-white flex flex-col">
        {/* Header */}
        <header className="grid grid-cols-12 items-center px-4 sm:px-8 md:px-16 pt-6 sm:pt-10 text-xl">
          <div className="col-span-6">
            <CompanyLogo />
          </div>
          <div className="col-span-6 text-right">
            <button
              onClick={() => openModal("login")}
              className="cursor-pointer border-2 border-primary px-8 sm:px-12 py-1 sm:py-2 rounded-4xl text-sm sm:text-base"
            >
              Login
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center text-center mt-50 sm:mt-45">
          <p className="text-2xl sm:text-5xl">Welcome to Admin Portal of</p>
          <p className="font-bold text-2xl sm:text-5xl mt-2">Fantasy Buzz</p>
          <div className="mt-6 sm:mt-14">
            <FormButton
              text="Login"
              textSize="text-base sm:text-xl"
              width="px-12 sm:px-30"
              height="py-1 sm:py-2"
              clickEvent={() => openModal("login")}
            />
          </div>
        </main>
      </div>

      {/* Modals */}
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
