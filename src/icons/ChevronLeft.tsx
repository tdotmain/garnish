
import * as React from "react";
import classnames from "classnames";

import ChevronLeft from "./ChevronLeft.svg";

export function ChevronLeftIcon({ className = "", ...props }) {
  const iconClassName = classnames("garnish_icon", className);
  return <ChevronLeft className={iconClassName}
    preserveAspectRatio="xMinYMin meet"
    fill="currentColor" 
    stroke="currentColor"
    width="auto"
    {...props}
  />;
}

export default ChevronLeftIcon;
