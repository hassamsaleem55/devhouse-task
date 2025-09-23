// import { useState } from "react";
// import CompanyLogo from "../components/CompanyLogo";
// import Login from "./Login";
// import ForgotPassword from "./ForgotPassword";
// import PasswordResetReqSent from "./PasswordResetReqSent";
// import ResetPassword from "./ResetPassword";

// function Landing() {
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
//   const [isForgotPasswordModalOpen, setIsForgotPasswordModalOpen] =
//     useState(false);
//   const [isPassResetReqSentModalOpen, setIsPassResetReqSentModalOpen] =
//     useState(false);
//   const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] =
//     useState(false);
//   return (
//     <>
//       <div className="w-screen h-screen bg-basic text-white">
//         {/* Header */}
//         <div className="grid grid-cols-12 pt-10 mx-16 text-xl">
//           <div className="md:col-span-6">
//             <CompanyLogo />
//           </div>

//           <div className="md:col-span-6 text-right">
//             <button
//               onClick={() => setIsLoginModalOpen(true)}
//               className="cursor-pointer border-2 border-primary px-16 py-2 rounded-4xl"
//             >
//               Login
//             </button>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex flex-col items-center justify-center h-[calc(90vh-80px)] text-4xl">
//           <div className="text-center">
//             <p>Welcome to Admin Portal of</p>
//             <p className="font-bold">Fantasy Buzz</p>
//             <button
//               onClick={() => setIsLoginModalOpen(true)}
//               className="bg-primary cursor-pointer px-24 py-2 rounded-4xl text-xl mt-10"
//             >
//               Login
//             </button>
//           </div>
//         </div>
//       </div>

//       <Login
//         isModalOpen={isLoginModalOpen}
//         closeModal={() => setIsLoginModalOpen(false)}
//         forgotPasswordClick={() => setIsForgotPasswordModalOpen(true)}
//       />

//       <ForgotPassword
//         isModalOpen={isForgotPasswordModalOpen}
//         closeModal={() => setIsForgotPasswordModalOpen(false)}
//         resetPasswordClick={() => setIsPassResetReqSentModalOpen(true)}
//       />

//       <PasswordResetReqSent
//         isModalOpen={isPassResetReqSentModalOpen}
//         closeModal={() => setIsPassResetReqSentModalOpen(false)}
//         resetNowClick={() => {
//           setIsResetPasswordModalOpen(true);
//         }}
//       />

//       <ResetPassword
//         isModalOpen={isResetPasswordModalOpen}
//         closeModal={() => setIsResetPasswordModalOpen(false)}
//         resetClick={() => {
//           setIsResetPasswordModalOpen(false);
//           setIsPassResetReqSentModalOpen(false);
//           setIsForgotPasswordModalOpen(false);
//         }}
//       />
//     </>
//   );
// }

// export default Landing;

import { useState } from "react";
import CompanyLogo from "../components/CompanyLogo";
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
      <div className="w-screen h-screen bg-basic text-white">
        {/* Header */}
        <div className="grid grid-cols-12 pt-10 mx-16 text-xl">
          <div className="md:col-span-6">
            <CompanyLogo />
          </div>
          <div className="md:col-span-6 text-right">
            <button
              onClick={() => openModal("login")}
              className="cursor-pointer border-2 border-primary px-16 py-2 rounded-4xl"
            >
              Login
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center h-[calc(90vh-80px)] text-4xl">
          <div className="text-center">
            <p>Welcome to Admin Portal of</p>
            <p className="font-bold">Fantasy Buzz</p>
            <button
              onClick={() => openModal("login")}
              className="bg-primary cursor-pointer px-24 py-2 rounded-4xl text-xl mt-10"
            >
              Login
            </button>
          </div>
        </div>
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
