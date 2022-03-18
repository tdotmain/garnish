
import * as React from "react";
import cn from "classnames";

import ArrowUp from "./ArrowUp.svg";

export function ArrowUpIcon({ className = "", ...props }) {
  const iconClassName = cn("garnish_icon", className);
  return <ArrowUp className={iconClassName}
    preserveAspectRatio="xMinYMin meet"
    fill="currentColor" 
    stroke="currentColor"
    width="auto"
    {...props}
  />;
}

export default ArrowUpIcon;
