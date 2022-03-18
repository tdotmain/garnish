import * as React from "react";
import cn from "classnames";
import css from "./accordian.module.css";

const variants = ["primary", "secondary", "info", "warning", "danger"] as const;

type Variant = typeof variants[number];

interface AccordianProps {
  label: React.ReactNode;
  variant?: Variant;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
  children?: React.ReactNode;
  onChange?: (...args) => void;
  openOnLoad?: boolean;
}

const defaults = {
  variant: "primary",
  className: "",
  headerClassName: "",
  contentClassName: "",
  children: null,
  label: "",
  openOnLoad: false,
};

function variantStyle(variant) {
  if (variants.includes(variant)) {
    return `garnish_accordian-${variant}`;
  }
  return "garnish_accordian_primary";
}

export function Accordian(props: AccordianProps) {
  const {
    variant,
    className,
    headerClassName,
    contentClassName,
    onChange,
    openOnLoad,
    label,
    ...rest
  } = props;
  const config = Object.assign({}, defaults, rest);

  const [open, setOpen] = React.useState(openOnLoad);

  const onClick = () => {
    const nextState = !open;
    setOpen(nextState);
    if (onChange) onChange(nextState);
  };

  const styles = {
    accordian: cn(css.garnish_accordian, variantStyle(variant), className),
    header: cn(css.garnish_accordian_header, {
      garnish_accordian_expanded: open,
    }),
    content: css.garnish_accordian_content,
  };

  return (
    <div
      aria-expanded={open}
      onClick={onClick}
      className={styles.accordian}
      {...rest}
    >
      <div className={styles.header}>{label}</div>
      {open && <div className={styles.content}>{config.children}</div>}
    </div>
  );
}

export default Accordian;
