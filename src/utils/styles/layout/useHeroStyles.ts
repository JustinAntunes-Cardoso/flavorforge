import { createStyles, rem } from '@mantine/core';

const useHeroStyles = createStyles((theme) => ({
	root: {
		backgroundColor: theme.fn.variant({
			variant: 'filled',
			color: theme.primaryColor,
		}).background,
	},

	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingTop: `calc(${theme.spacing.xl} * 8)`,
		paddingBottom: `calc(${theme.spacing.xl} * 8)`,
	},

	content: {
		maxWidth: rem(480),
		marginRight: `calc(${theme.spacing.xl} * 3)`,

		[theme.fn.smallerThan('md')]: {
			maxWidth: '100%',
			marginRight: 0,
		},
	},

	title: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.white,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		fontSize: rem(44),
		lineHeight: 1.3,
		fontWeight: 900,

		[theme.fn.smallerThan('xs')]: {
			fontSize: rem(28),
		},
	},

	subtitle: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.white,
		fontSize: rem(22),
	},

	emoji: {
		fontSize: rem(36),
	},

	text: {
		color: theme.colorScheme === 'dark' ? theme.white : theme.white,
		fontSize: rem(18),
	},

	bullet: {
		backgroundColor: theme.colors.secondary[3],
		borderRadius: 10,
		marginTop: rem(1.5),
	},

	image: {
		flex: 1,

		[theme.fn.smallerThan('md')]: {
			display: 'none',
		},
	},

	highlight: {
		position: 'relative',
		backgroundColor: theme.colors.secondary[3],
		borderRadius: theme.radius.sm,
		padding: `${rem(4)} ${rem(12)}`,
	},
}));

export default useHeroStyles;
