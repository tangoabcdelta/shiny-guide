import React from "react";

import { Page } from "./Page";
import * as HeaderStories from "./Header.stories";

const ExamplePage = {
  title: "Example/Page",
  component: Page,
};

const Template = (args) => <Page {...args} />;

const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};

export { LoggedIn, LoggedOut };
export default ExamplePage;
