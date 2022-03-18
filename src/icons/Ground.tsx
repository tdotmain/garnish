
import * as React from "react";
import cn from "classnames";

import Ground from "./Ground.svg";

export function GroundIcon({ className = "", ...props }) {
  const iconClassName = cn("garnish_icon", className);
  return <Ground className={iconClassName}
    preserveAspectRatio="xMinYMin meet"
    fill="currentColor" 
    stroke="currentColor"
    width="auto"
    {...props}
  />;
}

export default GroundIcon;
