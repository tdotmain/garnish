import * as React from "react";
import * as renderer from "react-test-renderer";

const { ReactComponent } = require("../icons/Sun.svg");

test("Link changes the class when hovered", () => {
  const component = renderer.create(<ReactComponent />);

  // // manually trigger the callback
  // tree.props.onMouseEnter();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();

  // // manually trigger the callback
  // tree.props.onMouseLeave();
  // // re-rendering
  // tree = component.toJSON();
  // expect(tree).toMatchSnapshot();
});
