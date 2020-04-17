import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "./index";
import { ThemeProvider } from "theme-ui";
import theme from "theme";

export default {
	title: "Button",
	component: Button,
};

export const Text = () => (
	<ThemeProvider theme={theme}>
		<Button onClick={action("clicked")}>Hello Button</Button>
	</ThemeProvider>
);
