
import * as React from "react";
import classnames from "classnames";

import ORGate from "./ORGate.svg";

export function ORGateIcon({ className = "", ...props }) {
  const iconClassName = classnames("garnish_icon", className);
  return <ORGate className={iconClassName}
    preserveAspectRatio="xMinYMin meet"
    fill="currentColor" 
    stroke="currentColor"
    width="auto"
    {...props}
  />;
}

export default ORGateIcon;
