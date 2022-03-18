import * as React from "react";
import cn from "classnames";
import css from "./switch.module.css";

interface SwitchProps {
  name: string;
  checked?: boolean;
  onChange?: (...args) => void;
}

export function Switch(props: SwitchProps) {
  const { checked, onChange, ...rest } = props;
  console.log(checked);
  const [isChecked, setIsChecked] = React.useState(checked);

  const _onChange = (event) => {
    setIsChecked(!isChecked);
    console.log(onChange);
    if (onChange) onChange(!isChecked);
  };

  const styles = {
    switch: cn(css.garnish_switch, {
      garnish_switch_checked: isChecked,
    }),
    input: cn(css.garnish_input),
    slider: cn(css.garnish_slider),
  };

  return (
    <label onClick={_onChange} htmlFor={props.name} className={styles.switch}>
      <input
        {...rest}
        className={styles.input}
        type="checkbox"
        checked={checked}
      />
      <span className={styles.slider}></span>
    </label>
  );
}

export default Switch;
