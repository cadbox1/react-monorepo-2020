// @ts-ignore
import React from 'react';
import { bootstrap } from "@theme-ui/presets";

export default {
	...bootstrap,
	sizes: { ...bootstrap.sizes, container: "800px" },
	buttons: {
		base: {
			cursor: "pointer",
		},
		primary: {
			variant: "buttons.base",
		},
	},
};
