import { createStyles, rem } from '@mantine/core';

export const use404Styles = createStyles((theme) => ({
	root: {
		paddingTop: rem(120),
		paddingBottom: rem(120),
		backgroundColor: theme.fn.variant({
			variant: 'filled',
			color: theme.primaryColor,
		}).background,
	},

	inner: {
		position: 'relative',
	},

	image: {
		...theme.fn.cover(),
		opacity: 0.65,
	},

	content: {
		paddingTop: rem(220),
		position: 'relative',
		zIndex: 1,

		[theme.fn.smallerThan('sm')]: {
			paddingTop: rem(120),
		},
	},

	title: {
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		textAlign: 'center',
		fontWeight: 900,
		fontSize: rem(38),
		color: theme.white,

		[theme.fn.smallerThan('sm')]: {
			fontSize: rem(32),
		},
	},

	description: {
		maxWidth: rem(460),
		margin: 'auto',
		marginTop: theme.spacing.xl,
		marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
		color: theme.colors[theme.primaryColor][8],
	},
}));
