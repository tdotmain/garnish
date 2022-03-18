
import * as React from "react";
import cn from "classnames";

import ChevronRight from "./ChevronRight.svg";

export function ChevronRightIcon({ className = "", ...props }) {
  const iconClassName = cn("garnish_icon", className);
  return <ChevronRight className={iconClassName}
    preserveAspectRatio="xMinYMin meet"
    fill="currentColor" 
    stroke="currentColor"
    width="auto"
    {...props}
  />;
}

export default ChevronRightIcon;
