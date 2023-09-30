export default {
	plugins: {
		'postcss-preset-mantine': {},
		'postcss-simple-vars': {
			variables: {
				// Import variables from _variables.scss
        		'@import "_variables.scss";': {},
				'mantine-breakpoint-xs': '36em',
				'mantine-breakpoint-sm': '48em',
				'mantine-breakpoint-md': '62em',
				'mantine-breakpoint-lg': '75em',
				'mantine-breakpoint-xl': '88em',
			},
		},
	},
};
