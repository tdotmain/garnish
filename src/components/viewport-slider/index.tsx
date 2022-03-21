import * as React from "react";
import classnames from "classnames";
import css from "./viewport-slider.module.css";
import { useWindowSize } from "../../hooks";

export function ViewportSlider({ children }) {
  const viewportRef = React.useRef();
  const viewRef = React.useRef();
  const handleRef = React.useRef();

  const { width } = useWindowSize();

  const [loading, setLoading] = React.useState(true);
  const [dragging, setDragging] = React.useState(false);
  const [maxWidth, setMaxWidth] = React.useState("100%");

  const dragActions = {
    onStart: (event) => {
      console.log("handle", event.target);
      console.log("viewport", event.target.parentNode);
      setDragging(true);
    },
    onDrag: (event) => {
      console.log("handle", event.target);
      console.log("viewport", event.target.parentNode);
    },
    onEnd: (event) => {
      console.log("handle", event.target);
      console.log("viewport", event.target.parentNode.client);
      setDragging(false);
    },
  };

  React.useEffect(() => {
    if (dragging) {
      console.log();
      return () => {
        // window.removeEventListener('', );
      };
    }
  }, [dragging]);

  React.useEffect(() => {
    if (viewportRef.current) {
      setMaxWidth(viewportRef.current.offsetParent.clientWidth);
      setLoading(false);
    }
  }, [viewportRef.current, width]);

  React.useEffect(() => {
    if (handleRef.current) {
      console.log("handlbar", handleRef.current.offsetParent.clientWidth);
      setLoading(false);
    }
  }, [handleRef.current, width]);

  return (
    <div
      ref={viewportRef}
      className={css.garnish_viewport_slider_container}
      style={{ maxWidth }}
    >
      {!loading ? (
        <div ref={viewRef} className={css.garnish_viewport_slider_content}>
          {children}
        </div>
      ) : (
        "Loading ..."
      )}
      <span
        draggable
        ref={handleRef}
        onDragStart={dragActions.onStart}
        onDrag={dragActions.onDrag}
        onDragEnd={dragActions.onEnd}
        className={css.garnish_viewport_slider_handle}
        style={{}}
      >
        <span />
        <span />
        <span />
      </span>
    </div>
  );
}

export default ViewportSlider;
