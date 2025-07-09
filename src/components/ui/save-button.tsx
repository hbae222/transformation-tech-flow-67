"use client";

import { cn } from "@/lib/utils";
import { Check, Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, forwardRef, useState } from "react";

export interface SaveButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  success?: boolean;
  children: React.ReactNode;
}

const SaveButton = forwardRef<HTMLButtonElement, SaveButtonProps>(
  ({ className, loading = false, success = false, children, onClick, ...props }, ref) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (loading || success) return;
      
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 200);
      
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <div className="relative inline-block">
        {/* Animated outline effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary to-primary rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        
        <button
          ref={ref}
          className={cn(
            "relative group inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition-all duration-300 ease-out",
            "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:scale-105",
            "transform active:scale-95 active:transition-transform active:duration-75",
            "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
            "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2",
            "before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-primary before:opacity-0 before:animate-pulse-border hover:before:opacity-100",
            isClicked && "scale-95",
            loading && "animate-pulse",
            success && "bg-green-600 hover:bg-green-700",
            className
          )}
          onClick={handleClick}
          disabled={loading || success}
          {...props}
        >
          <span className={cn(
            "flex items-center gap-2 transition-all duration-200 relative z-10",
            (loading || success) && "opacity-0"
          )}>
            {children}
          </span>
          
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <Loader2 className="h-5 w-5 animate-spin" />
            </div>
          )}
          
          {success && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <Check className="h-5 w-5 text-primary-foreground" />
            </div>
          )}
        </button>
      </div>
    );
  }
);

SaveButton.displayName = "SaveButton";

export { SaveButton };