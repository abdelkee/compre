"use client";

type ButtonProps = {
  children: React.ReactNode;
  shape: "square" | "circle" | "long";
  disabled?: boolean;
  execute: Function;
};

function Button({ children, shape, disabled = false, execute }: ButtonProps) {
  return (
    <button
      onClick={() => execute()}
      className={`bg-green-600 grid place-items-center shrink-0 text-white focus:active:opacity-80 focus:active:translate-y-0.5 focus:active:border-none ${
        shape === "square"
          ? "w-12 h-12 rounded-sm border-b-4 border-b-green-800"
          : shape === "circle"
          ? "w-11 rounded-full h-11"
          : "w-full rounded-sm border-b-4 border-b-green-800 py-2"
      } ${disabled && "bg-gray-400 border-none"}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
