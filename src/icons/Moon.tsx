
import * as React from "react";
import cn from "classnames";

import Moon from "./Moon.svg";

export function MoonIcon({ className = "", ...props }) {
  const iconClassName = cn("garnish_icon", className);
  return <Moon className={iconClassName}
    preserveAspectRatio="xMinYMin meet"
    fill="currentColor" 
    stroke="currentColor"
    width="auto"
    {...props}
  />;
}

export default MoonIcon;
