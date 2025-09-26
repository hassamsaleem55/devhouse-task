import CompanyLogo from "../components/CompanyLogo";

function LandingHeader({ openModal }: { openModal: (modal: string) => void }) {
  return (
    <header className="grid grid-cols-12 items-center px-4 sm:px-8 md:px-16 pt-6 sm:pt-10 text-xl">
      <div className="col-span-6">
        <CompanyLogo />
      </div>
      <div className="col-span-6 text-right">
        <button
          onClick={() => openModal("login")}
          className="cursor-pointer border-2 border-primary px-8 sm:px-12 py-1 sm:py-2 rounded-4xl text-sm sm:text-base"
        >
          {`Login`}
        </button>
      </div>
    </header>
  );
}

export default LandingHeader;
