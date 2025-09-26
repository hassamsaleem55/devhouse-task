import { Outlet } from "react-router";
import LandingHeader from "../sections/LandingHeader";
import LandingMain from "../sections/LandingMain";
import { useState } from "react";

function AppLayout() {
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
    <div className="font-basic">
      <div className="w-screen h-screen bg-basic text-white flex flex-col">
        <LandingHeader openModal={() => openModal("login")} />
        <LandingMain openModal={() => openModal("login")} />
      </div>
      <Outlet context={{ modals, openModal, closeModal }} />
    </div>
  );
}

export default AppLayout;
