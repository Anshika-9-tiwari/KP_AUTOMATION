"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "btn rounded-full normal-case font-medium transition-all duration-300",
  {
    variants: {
      size: {
        sm: "btn-sm px-5",
        md: "px-6 h-12",
        lg: "px-8 h-14 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface SecondaryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  children: ReactNode;
  icon?: boolean;
  className?: string;
}

export default function SecondaryButton({
  href,
  children,
  icon = true,
  size,
  className,
  ...props
}: SecondaryButtonProps) {
  const classes = cn(
    buttonVariants({ size }),
    "btn-outline border-neutral-content text-neutral-content hover:bg-primary hover:text-white",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {icon && <ArrowRight size={18} />}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon && <ArrowRight size={18} />}
    </button>
  );
}