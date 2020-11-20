import React from "react";

import { Button } from "./Button";
const ExampleButton = {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

export { Primary, Secondary, Large, Small, ExampleButton };
export default Button;
