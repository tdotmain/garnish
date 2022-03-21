
import * as React from "react";
import classnames from "classnames";

import ANDGate from "./ANDGate.svg";

export function ANDGateIcon({ className = "", ...props }) {
  const iconClassName = classnames("garnish_icon", className);
  return <ANDGate className={iconClassName}
    preserveAspectRatio="xMinYMin meet"
    fill="currentColor" 
    stroke="currentColor"
    width="auto"
    {...props}
  />;
}

export default ANDGateIcon;
