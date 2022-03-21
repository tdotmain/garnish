
import * as React from "react";
import classnames from "classnames";

import Sun from "./Sun.svg";

export function SunIcon({ className = "", ...props }) {
  const iconClassName = classnames("garnish_icon", className);
  return <Sun className={iconClassName}
    preserveAspectRatio="xMinYMin meet"
    fill="currentColor" 
    stroke="currentColor"
    width="auto"
    {...props}
  />;
}

export default SunIcon;
