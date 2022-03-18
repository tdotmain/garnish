
import * as React from "react";
import cn from "classnames";

import Cloud from "./Cloud.svg";

export function CloudIcon({ className = "", ...props }) {
  const iconClassName = cn("garnish_icon", className);
  return <Cloud className={iconClassName}
    preserveAspectRatio="xMinYMin meet"
    fill="currentColor" 
    stroke="currentColor"
    width="auto"
    {...props}
  />;
}

export default CloudIcon;
