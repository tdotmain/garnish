
import * as React from "react";
import classnames from "classnames";

import ChevronRight from "./ChevronRight.svg";

export function ChevronRightIcon({ className = "", ...props }) {
  const iconClassName = classnames("garnish_icon", className);
  return <ChevronRight className={iconClassName}
    preserveAspectRatio="xMinYMin meet"
    fill="currentColor" 
    stroke="currentColor"
    width="auto"
    {...props}
  />;
}

export default ChevronRightIcon;
