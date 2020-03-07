// @ts-ignore
import { bootstrap } from "@theme-ui/presets";

export default {
	...bootstrap,
	sizes: { ...bootstrap.styles, container: "800px" },
	layout: {
		...bootstrap.layout,
		container: {
			px: 2,
		},
	},
};
