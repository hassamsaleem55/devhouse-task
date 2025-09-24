import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const bgColorClasses: Record<string, string> = {
  black: "bg-black",
  primary: "bg-primary",
};

function FormInput({ item, changeEvent }: { item: any; changeEvent: any }) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col relative">
      <label className="mb-1 text-xs font-medium text-gray-500">
        {item.label}
      </label>
      <input
        type={
          item.type === "password"
            ? showPassword
              ? "text"
              : "password"
            : item.type
        }
        className="w-full text-sm border border-gray-300 rounded-4xl py-1 px-4 pr-10 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-transparent"
        value={item.value}
        onChange={changeEvent}
      />
      {item.type === "password" && (
        <button
          type="button"
          className="text-primary absolute right-3 top-7 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <Eye size={14} /> : <EyeOff size={14} />}
        </button>
      )}
    </div>
  );
}

function FormButton({
  text,
  textSize = "text-sm",
  bgColor = "primary",
  width = "w-full",
  height = "py-2",
  clickEvent,
}: {
  text: string;
  textSize?: string;
  bgColor?: string;
  width?: string;
  height?: string;
  clickEvent?: () => void;
}) {
  return (
    <button
      onClick={clickEvent}
      className={`${bgColorClasses[bgColor]} ${width} ${height} ${textSize} text-white rounded-4xl cursor-pointer`}
    >
      {text}
    </button>
  );
}

export { FormInput, FormButton };
