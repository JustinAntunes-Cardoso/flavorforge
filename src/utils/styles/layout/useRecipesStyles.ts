import { createStyles } from '@mantine/core';

const useRecipesStyles = createStyles((theme) => ({
	background: {
		paddingTop: `calc(${theme.spacing.xl} * 2)`,
		paddingBottom: `calc(${theme.spacing.xl} * 2)`,
		backgroundColor: theme.fn.variant({
			variant: 'filled',
			color: theme.primaryColor,
		}).background,
	},

	text: {
		color: 'white',
	},

	button: {
		borderRadius: '5rem',
		backgroundColor: theme.colors.secondary[3],
		'&:hover': {
			backgroundColor: theme.colors.secondary[5],
			borderColor: theme.colors.secondary[4],
		},
	},
}));

export default useRecipesStyles;
