
import * as React from "react";
import classnames from "classnames";

import ArrowUp from "./ArrowUp.svg";

export function ArrowUpIcon({ className = "", ...props }) {
  const iconClassName = classnames("garnish_icon", className);
  return <ArrowUp className={iconClassName}
    preserveAspectRatio="xMinYMin meet"
    fill="currentColor" 
    stroke="currentColor"
    width="auto"
    {...props}
  />;
}

export default ArrowUpIcon;
