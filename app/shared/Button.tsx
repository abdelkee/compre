"use client";

type ButtonProps = {
  children: React.ReactNode;
  shape: "square" | "long" | "long2" | "none" | "circle";
  disabled?: boolean;
  execute: Function;
};

function Button({ children, shape, disabled = false, execute }: ButtonProps) {
  return (
    <button
      onClick={() => execute()}
      className={`grid place-items-center shrink-0 text-white focus:active:opacity-80 focus:active:translate-y-0.5 focus:active:border-none ${
        shape === "square"
          ? "w-12 h-12 rounded-sm border-b-4 border-b-green-800 bg-green-600"
          : shape === "long"
          ? "w-full rounded-sm border-b-4 border-b-green-800 py-2 bg-green-600"
          : shape === "none"
          ? "w-11 rounded-full h-11 bg-transparent"
          : shape === "circle"
          ? "w-8 rounded-full h-8 bg-gray-50 opacity-90 text-purple-500 absolute top-1 left-1"
          : "w-full py-2 bg-purple-600"
      } ${disabled && "bg-gray-400 border-none"}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;