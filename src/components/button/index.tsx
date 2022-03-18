import * as React from "react";
import cn from "classnames";
import css from "./button.module.css";

const variants = ["primary", "secondary", "info", "warning", "danger"] as const;

type Variant = typeof variants[number];

interface ButtonProps {
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
}

const defaults = {
  variant: "primary",
  className: "",
  children: null,
};

function variantStyle(variant) {
  if (variants.includes(variant)) {
    return `garnish_button-${variant}`;
  }
  return "garnish_button-primary";
}

export function Button({
  variant,
  className,
  children,
  ...props
}: ButtonProps) {
  const config = Object.assign({}, defaults, { variant, className, children });
  const styles = {
    button: cn(
      variantStyle(config.variant),
      css.garnish_button,
      config.className
    ),
  };
  return (
    <button className={styles.button} {...props}>
      {config.children}
    </button>
  );
}

export default Button;
