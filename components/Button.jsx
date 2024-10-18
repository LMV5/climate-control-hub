export default function Button({
  type = "button",
  variant = "default",
  children,
  onClick,
}) {
  const baseStyles =
    "text-black px-4 py-2 rounded-lg shadow-md transition ease-in focus:border-paleYellow focus:shadow-[0_0_10px_rgba(243,249,210,1)]";
  const sizeStyles = variant === "primary" ? "mt-12 w-44" : "w-24";
  const variantStyles = {
    primary: "bg-paleYellow hover:bg-aquamarine mt-12 w-[11rem]",
    save: "bg-softGreen hover:bg-green",
    edit: "bg-softBlue hover:bg-dodgerBlue",
    cancel: "bg-lightCoral hover:bg-brightPink",
    back: "bg-timberWolf hover:bg-silver",
    default: "bg-slateGray hover:bg-slate-600",
  };

  const activeStyles =
    "active:scale-95 active:shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-200";

  return (
    <button
      type={type}
      variant={variant}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles} ${variantStyles[variant] || variantStyles.default} ${activeStyles}`}
    >
      {children}
    </button>
  );
}
