import UiLoader from "./index";

export default {
  title: "Ui-Kit/Ui-loader",
  component: UiLoader,
};

const Template = (args) => <UiLoader {...args} />;

const props = {
  theme: "blue",
};

export const Blue = Template.bind({});

Blue.args = {
  ...props,
  theme: "blue",
};

export const Red = Template.bind({});

Red.args = {
  ...props,
  theme: "red",
};
