
import * as React from "react";
import classnames from "classnames";

import GarnishLogo from "./GarnishLogo.svg";

export function GarnishLogoIcon({ className = "", ...props }) {
  const iconClassName = classnames("garnish_icon", className);
  return <GarnishLogo className={iconClassName}
    preserveAspectRatio="xMinYMin meet"
    fill="currentColor" 
    stroke="currentColor"
    width="auto"
    {...props}
  />;
}

export default GarnishLogoIcon;
