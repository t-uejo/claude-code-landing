interface SimpleCardProps {
  children: React.ReactNode;
  className?: string;
}

export function SimpleCard({ children, className = "" }: SimpleCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </div>
  );
}

interface SimpleButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export function SimpleButton({ children, variant = "primary", className = "", onClick }: SimpleButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-colors";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}