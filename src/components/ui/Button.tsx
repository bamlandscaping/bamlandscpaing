import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "outline" | "outline-dark";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-green text-white hover:bg-green-dark hover:-translate-y-0.5 hover:shadow-lg",
  outline:
    "bg-transparent text-white border-2 border-white hover:bg-white hover:text-green-dark",
  "outline-dark":
    "bg-transparent text-green-dark border-2 border-green-dark hover:bg-green-dark hover:text-white",
};

interface ButtonProps {
  variant?: Variant;
  href?: string;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
}

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-8 py-3.5 rounded-md font-semibold text-base transition-all duration-300 tracking-wide cursor-pointer";
  const cls = `${base} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
