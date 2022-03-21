import * as React from "react";
import classnames from "classnames";
import css from "./button.module.css";

const appearanceTypes = [
  "default",
  "unstyled",
  "success",
  "info",
  "warning",
  "danger",
  "link",
] as const;

type Appearnace = typeof appearanceTypes[number];

interface ButtonProps {
  appearance?: Appearnace;
  className?: string;
  children?: React.ReactNode;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  addonBefore?: React.ReactNode;
  addonAfter?: React.ReactNode;
  isLoading?: boolean;
}

const defaults = {
  appearance: appearanceTypes[0],
  isLoading: false,
};

function appearanceStyle(appearnace) {
  if (appearanceTypes.includes(appearnace)) {
    return `garnish_button_${appearnace}`;
  }
  return `garnish_button_${appearanceTypes[0]}`;
}

export function Button({
  appearance,
  className,
  children,
  iconBefore,
  iconAfter,
  addonBefore,
  addonAfter,
  isLoading,
  ...props
}: ButtonProps) {
  const config = Object.assign({}, defaults, {
    appearance,
    className,
    children,
  });
  const styles = {
    button: classnames(
      css.garnish_button,
      appearanceStyle(config.appearance),
      config.className,
      {
        garnish_button_loading: isLoading,
      }
    ),
  };

  return (
    <button className={styles.button} {...props}>
      {addonBefore && addonBefore}
      {iconBefore && iconBefore}
      {config.children && config.children}
      {iconAfter && iconAfter}
      {addonAfter && addonAfter}
    </button>
  );
}

export default Button;
