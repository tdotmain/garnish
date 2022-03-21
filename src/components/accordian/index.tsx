import * as React from "react";
import classnames from "classnames";
import css from "./accordian.module.css";

const appearanceTypes = [
  "default",
  "unstyled",
  "success",
  "info",
  "warning",
  "danger",
] as const;

type Appearance = typeof appearanceTypes[number];

type AccordianClassnames = {
  accordian?: string;
  header?: string;
  content?: string;
};

interface AccordianProps {
  label: React.ReactNode;
  appearance?: Appearance;
  className?: string;
  classNames?: AccordianClassnames;
  children?: React.ReactNode;
  onChange?: (...args) => void;
  openOnLoad?: boolean;
  rounded?: boolean;
}

const defaults = {
  appearance: appearanceTypes[0],
  label: "",
  openOnLoad: false,
};

function variantStyle(variant) {
  if (appearanceTypes.includes(variant)) {
    return `garnish_accordian_${variant}`;
  }
  return `garnish_accordian_${appearanceTypes[0]}`;
}

export function Accordian(props: AccordianProps) {
  const {
    appearance,
    className,
    onChange,
    openOnLoad,
    label,
    classNames,
    rounded,
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
    accordian: classnames(
      css.garnish_accordian,
      variantStyle(appearance),
      classNames?.header,
      className,
      {
        garnish_accordian_expanded: open,
        garnish_accordian_rounded: rounded,
      }
    ),
    header: classnames(classNames?.header, css.garnish_accordian_header),
    content: classnames(classNames?.header, css.garnish_accordian_content),
  };

  return (
    <div aria-expanded={open} className={styles.accordian} {...rest}>
      <div onClick={onClick} className={styles.header}>
        {label}
      </div>
      <div className={styles.content}>{config.children && config.children}</div>
    </div>
  );
}

export default Accordian;
