
import * as React from "react";
import cn from "classnames";

import ANDGate from "./ANDGate.svg";

export function ANDGateIcon({ className = "", ...props }) {
  const iconClassName = cn("garnish_icon", className);
  return <ANDGate className={iconClassName}
    preserveAspectRatio="xMinYMin meet"
    fill="currentColor" 
    stroke="currentColor"
    width="auto"
    {...props}
  />;
}

export default ANDGateIcon;
