
import * as React from "react";
import cn from "classnames";

import Ground2 from "./Ground2.svg";

export function Ground2Icon({ className = "", ...props }) {
  const iconClassName = cn("garnish_icon", className);
  return <Ground2 className={iconClassName}
    preserveAspectRatio="xMinYMin meet"
    fill="currentColor" 
    stroke="currentColor"
    width="auto"
    {...props}
  />;
}

export default Ground2Icon;
