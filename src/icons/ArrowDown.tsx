
import * as React from "react";
import classnames from "classnames";

import ArrowDown from "./ArrowDown.svg";

export function ArrowDownIcon({ className = "", ...props }) {
  const iconClassName = classnames("garnish_icon", className);
  return <ArrowDown className={iconClassName}
    preserveAspectRatio="xMinYMin meet"
    fill="currentColor" 
    stroke="currentColor"
    width="auto"
    {...props}
  />;
}

export default ArrowDownIcon;
