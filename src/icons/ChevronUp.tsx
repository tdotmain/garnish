
import * as React from "react";
import classnames from "classnames";

import ChevronUp from "./ChevronUp.svg";

export function ChevronUpIcon({ className = "", ...props }) {
  const iconClassName = classnames("garnish_icon", className);
  return <ChevronUp className={iconClassName}
    preserveAspectRatio="xMinYMin meet"
    fill="currentColor" 
    stroke="currentColor"
    width="auto"
    {...props}
  />;
}

export default ChevronUpIcon;
