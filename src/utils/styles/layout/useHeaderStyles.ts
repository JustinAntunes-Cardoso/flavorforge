import { createStyles, rem } from '@mantine/core';

const useHeaderStyles = createStyles((theme) => ({
	header: {
		paddingTop: `calc(${theme.spacing.xl} * 2)`,
		paddingBottom: `calc(${theme.spacing.xl} * 2)`,
		backgroundColor: theme.colors.brand[3],
		borderBottom: `${rem(1)} solid ${
			theme.colorScheme === 'dark'
				? theme.colors.dark[5]
				: theme.colors.brand[7]
		}`,
		width: '100%',
	},

	inner: {
		height: rem(56),
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		minWidth: rem(56),
		[theme.fn.largerThan('sm')]: {
			width: '100%',
			margin: '0 auto',
		},
	},

	links: {
		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	burger: {
		[theme.fn.largerThan('sm')]: {
			display: 'none',
		},
	},

	link: {
		display: 'block',
		lineHeight: 1,
		padding: `${rem(8)} ${rem(12)}`,
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color: theme.white,
		fontSize: theme.fontSizes.xl,
		fontWeight: 500,

		'&:hover': {
			backgroundColor: theme.fn.lighten(
				theme.fn.variant({ variant: 'filled', color: theme.primaryColor })
					.background!,
				0.1
			),
		},
	},

	linkLabel: {
		marginRight: rem(5),
	},
}));

export default useHeaderStyles;
