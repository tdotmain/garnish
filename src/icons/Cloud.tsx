
import * as React from "react";
import classnames from "classnames";

import Cloud from "./Cloud.svg";

export function CloudIcon({ className = "", ...props }) {
  const iconClassName = classnames("garnish_icon", className);
  return <Cloud className={iconClassName}
    preserveAspectRatio="xMinYMin meet"
    fill="currentColor" 
    stroke="currentColor"
    width="auto"
    {...props}
  />;
}

export default CloudIcon;
