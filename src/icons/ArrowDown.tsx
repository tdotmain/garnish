
import * as React from "react";
import cn from "classnames";

import ArrowDown from "./ArrowDown.svg";

export function ArrowDownIcon({ className = "", ...props }) {
  const iconClassName = cn("garnish_icon", className);
  return <ArrowDown className={iconClassName}
    preserveAspectRatio="xMinYMin meet"
    fill="currentColor" 
    stroke="currentColor"
    width="auto"
    {...props}
  />;
}

export default ArrowDownIcon;
