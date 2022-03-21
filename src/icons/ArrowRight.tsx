
import * as React from "react";
import classnames from "classnames";

import ArrowRight from "./ArrowRight.svg";

export function ArrowRightIcon({ className = "", ...props }) {
  const iconClassName = classnames("garnish_icon", className);
  return <ArrowRight className={iconClassName}
    preserveAspectRatio="xMinYMin meet"
    fill="currentColor" 
    stroke="currentColor"
    width="auto"
    {...props}
  />;
}

export default ArrowRightIcon;
