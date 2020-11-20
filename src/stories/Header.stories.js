import React from "react";

import { Header } from "./Header";

const ExampleHeader = {
  title: "Example/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

const LoggedOut = Template.bind({});
LoggedOut.args = {};

export { LoggedIn, LoggedOut };
export default ExampleHeader;
