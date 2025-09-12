import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "light" | "dark" | "surface" | "brand" | "ink";
  id?: string;
}

export default function Section({ 
  children, 
  className, 
  background = "light",
  id
}: SectionProps) {
  const backgroundClasses = {
    light: "bg-surface",
    dark: "bg-ink text-textd",
    surface: "bg-accent",
    brand: "bg-gradient-to-br from-brand-primary to-brand-secondary text-textd",
    ink: "bg-ink text-textd",
  };

  return (
    <section 
      id={id}
      className={cn(
        "py-16 lg:py-24",
        backgroundClasses[background],
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
