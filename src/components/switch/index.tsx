import * as React from "react";
import classnames from "classnames";
import css from "./switch.module.css";

interface SwitchProps {
  name: string;
  checked?: boolean;
  onChange?: (...args) => void;
}

export function Switch(props: SwitchProps) {
  const { checked, onChange, ...rest } = props;

  const switchRef = React.useRef();

  const [isChecked, setIsChecked] = React.useState(checked);

  const _onChange = (event) => {
    setIsChecked(!isChecked);
    if (onChange) onChange(!isChecked);
  };

  const styles = {
    switch: classnames(css.garnish_switch, {
      garnish_switch_checked: isChecked,
    }),
    input: classnames(css.garnish_input),
    slider: classnames(css.garnish_slider),
  };

  return (
    <label
      onClick={() => switchRef.current.click()}
      htmlFor={props.name}
      className={styles.switch}
    >
      <input
        ref={switchRef}
        {...rest}
        className={styles.input}
        type="checkbox"
        aria-checked={checked}
        onChange={_onChange}
        checked={checked}
      />
      <span className={styles.slider}></span>
    </label>
  );
}

export default Switch;
