type Props = {
  variant?: "primary";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button = ({ variant, children, onClick, className }: Props) => {
  const styles = {
    primary: "bg-transparent border-primary dark:text-primary text-slate-800",
  };

  return (
    <button
      className={`cursor-pointer rounded-md border-2 px-3 py-2 text-xl shadow-md hover:-translate-y-0.5 md:px-4 md:py-2.5 ${
        variant
          ? styles[variant]
          : "border-slate-800 bg-slate-50 text-slate-800 dark:border-slate-100 dark:bg-transparent dark:text-slate-100"
      } ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
