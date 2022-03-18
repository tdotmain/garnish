
import * as React from "react";
import cn from "classnames";

import ArrowLeft from "./ArrowLeft.svg";

export function ArrowLeftIcon({ className = "", ...props }) {
  const iconClassName = cn("garnish_icon", className);
  return <ArrowLeft className={iconClassName}
    preserveAspectRatio="xMinYMin meet"
    fill="currentColor" 
    stroke="currentColor"
    width="auto"
    {...props}
  />;
}

export default ArrowLeftIcon;
