
import * as React from "react";
import classnames from "classnames";

import ChevronDown from "./ChevronDown.svg";

export function ChevronDownIcon({ className = "", ...props }) {
  const iconClassName = classnames("garnish_icon", className);
  return <ChevronDown className={iconClassName}
    preserveAspectRatio="xMinYMin meet"
    fill="currentColor" 
    stroke="currentColor"
    width="auto"
    {...props}
  />;
}

export default ChevronDownIcon;
