import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
export const decorators = [withBackgrounds];
export const parameters = {
  backgrounds: {
    default: "gray",
    values: [
      { name: "plain", value: "white" },
      { name: "gray", value: "#F6F6F6" },
      { name: "warm", value: "hotpink" },
      { name: "cool", value: "deepskyblue" },
    ],
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
};
