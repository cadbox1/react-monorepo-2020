module.exports = {
	stories: ["../src/**/*.stories.@(js|mdx|tsx)"],
	addons: [
		{
			name: "@storybook/addon-docs",
			options: {
				configureJSX: true,
				options: { mdxBabelOptions: { babelrc: true, configFile: true } },
			},
		},
		"@storybook/addon-actions",
		"@storybook/addon-links",
		"@storybook/addon-viewport/register",
	],
};
