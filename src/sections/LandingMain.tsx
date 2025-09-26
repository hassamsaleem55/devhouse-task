import { FormButton } from "../components/Form";

function LandingMain({ openModal }: { openModal: (modal: string) => void }) {
  return (
    <main className="flex flex-col items-center justify-center text-center mt-50 sm:mt-45">
      <p className="text-2xl sm:text-5xl">{`Welcome to Admin Portal of`}</p>
      <p className="font-bold text-2xl sm:text-5xl mt-2">{`Fantasy Buzz`}</p>
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
  );
}

export default LandingMain;
