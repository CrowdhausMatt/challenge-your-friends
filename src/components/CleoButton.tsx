import { cn } from "@/lib/utils";

interface CleoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const CleoButton = ({ children, className, variant = "primary", ...props }: CleoButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-full px-6 py-3 font-bold text-white transition-all hover:scale-105",
        variant === "primary" 
          ? "bg-gradient-to-r from-cleo-blue to-cleo-green" 
          : "bg-cleo-pink",
        "animate-fade-in",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default CleoButton;