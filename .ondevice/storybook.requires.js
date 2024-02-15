/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./src/__stories__",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:src\\/__stories__(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
];

import "@storybook/addon-ondevice-notes/register";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return {
    "./src/__stories__/Avatar.stories.tsx": require("../src/__stories__/Avatar.stories.tsx"),
    "./src/__stories__/Badge.stories.tsx": require("../src/__stories__/Badge.stories.tsx"),
    "./src/__stories__/Button.stories.tsx": require("../src/__stories__/Button.stories.tsx"),
    "./src/__stories__/Circle.stories.tsx": require("../src/__stories__/Circle.stories.tsx"),
    "./src/__stories__/Divider.stories.tsx": require("../src/__stories__/Divider.stories.tsx"),
    "./src/__stories__/Horizontal.stories.tsx": require("../src/__stories__/Horizontal.stories.tsx"),
    "./src/__stories__/LoadingBar.stories.tsx": require("../src/__stories__/LoadingBar.stories.tsx"),
    "./src/__stories__/Logo.stories.tsx": require("../src/__stories__/Logo.stories.tsx"),
    "./src/__stories__/NavigationBar.stories.tsx": require("../src/__stories__/NavigationBar.stories.tsx"),
    "./src/__stories__/Placeholder.stories.tsx": require("../src/__stories__/Placeholder.stories.tsx"),
    "./src/__stories__/ProgressBar.stories.tsx": require("../src/__stories__/ProgressBar.stories.tsx"),
    "./src/__stories__/Sheet.stories.tsx": require("../src/__stories__/Sheet.stories.tsx"),
    "./src/__stories__/SkeletonCircle.stories.tsx": require("../src/__stories__/SkeletonCircle.stories.tsx"),
    "./src/__stories__/SkeletonLine.stories.tsx": require("../src/__stories__/SkeletonLine.stories.tsx"),
    "./src/__stories__/SkeletonRectangle.stories.tsx": require("../src/__stories__/SkeletonRectangle.stories.tsx"),
    "./src/__stories__/SkeletonRow.stories.tsx": require("../src/__stories__/SkeletonRow.stories.tsx"),
    "./src/__stories__/Skeletons.stories.tsx": require("../src/__stories__/Skeletons.stories.tsx"),
    "./src/__stories__/SkeletonText.stories.tsx": require("../src/__stories__/SkeletonText.stories.tsx"),
    "./src/__stories__/Stepper.stories.tsx": require("../src/__stories__/Stepper.stories.tsx"),
    "./src/__stories__/Tabs.stories.tsx": require("../src/__stories__/Tabs.stories.tsx"),
    "./src/__stories__/Tag.stories.tsx": require("../src/__stories__/Tag.stories.tsx"),
    "./src/__stories__/Text.stories.tsx": require("../src/__stories__/Text.stories.tsx"),
    "./src/__stories__/Title.stories.tsx": require("../src/__stories__/Title.stories.tsx"),
  };
};

configure(getStories, module, false);
