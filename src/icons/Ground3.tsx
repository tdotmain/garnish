
import * as React from "react";
import classnames from "classnames";

import Ground3 from "./Ground3.svg";

export function Ground3Icon({ className = "", ...props }) {
  const iconClassName = classnames("garnish_icon", className);
  return <Ground3 className={iconClassName}
    preserveAspectRatio="xMinYMin meet"
    fill="currentColor" 
    stroke="currentColor"
    width="auto"
    {...props}
  />;
}

export default Ground3Icon;
