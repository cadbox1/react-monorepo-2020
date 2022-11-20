// @ts-ignore
import { bootstrap } from "@theme-ui/presets";

const theme = {
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

export default theme;
