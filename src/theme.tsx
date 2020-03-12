// @ts-ignore
import { bootstrap } from "@theme-ui/presets";

export default {
	...bootstrap,
	sizes: { ...bootstrap.sizes, container: "800px" },
	layout: {
		...bootstrap.layout,
		container: {
			px: 2,
		},
	},
	buttons: {
		base: {
			cursor: "pointer",
		},
		primary: {
			variant: "buttons.base",
		},
	},
};
