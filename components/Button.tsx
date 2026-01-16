interface ButtonProps {
  text: string;
  variant: "Primary" | "Secondary";
  onClick: () => void;
}

export default function Button(props: ButtonProps) {
  const primaryStyles: string =
    "inline-flex items-center justify-center px-4 py-2 rounded-lg bg-red-600 text-white font-medium \
   shadow-sm hover:bg-red-700 active:bg-red-800 transition-colors duration-200 \
   focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2";

  const secondaryStyles: string =
    "inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-red-600 font-medium \
   border border-red-300 shadow-sm hover:bg-red-50 active:bg-red-100 transition-colors duration-200 \
   focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2";

  return (
    <button
      onClick={props.onClick}
      className={props.variant === "Primary" ? primaryStyles : secondaryStyles}
    >
      {props.text}
    </button>
  );
}
