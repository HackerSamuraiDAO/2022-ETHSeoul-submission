import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TokenList as Component } from "./TokenList";

export default {
  title: "Components/Token List",
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => (
  <Component {...args} />
);

export const TokenList = Template.bind({});
