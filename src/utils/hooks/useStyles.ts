import { createStyles, rem } from '@mantine/core';

export const useHeaderStyles = createStyles((theme) => ({
	header: {
		paddingTop: `calc(${theme.spacing.xl} * 2)`,
		paddingBottom: `calc(${theme.spacing.xl} * 2)`,
		backgroundColor: theme.colors.brand[3],
		borderBottom: 0,
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

export const useFooterStyles = createStyles((theme) => ({
	footer: {
		paddingTop: `calc(${theme.spacing.xl} * 2)`,
		paddingBottom: `calc(${theme.spacing.xl} * 2)`,
		backgroundColor:
			theme.colorScheme === 'dark'
				? theme.colors.dark[6]
				: theme.colors.gray[0],
		borderTop: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
		}`,
	},

	logo: {
		maxWidth: rem(200),

		[theme.fn.smallerThan('sm')]: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
	},

	description: {
		marginTop: rem(5),

		[theme.fn.smallerThan('sm')]: {
			marginTop: theme.spacing.xs,
			textAlign: 'center',
		},
	},

	inner: {
		display: 'flex',
		justifyContent: 'space-between',

		[theme.fn.smallerThan('sm')]: {
			flexDirection: 'column',
			alignItems: 'center',
		},
	},

	groups: {
		display: 'flex',
		flexWrap: 'wrap',

		[theme.fn.smallerThan('sm')]: {
			display: 'none',
		},
	},

	wrapper: {
		width: rem(160),
	},

	link: {
		display: 'block',
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[1]
				: theme.colors.gray[6],
		fontSize: theme.fontSizes.sm,
		paddingTop: rem(3),
		paddingBottom: rem(3),

		'&:hover': {
			textDecoration: 'underline',
		},
	},

	title: {
		fontSize: theme.fontSizes.lg,
		fontWeight: 700,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		marginBottom: `calc(${theme.spacing.xs} / 2)`,
		color: theme.colorScheme === 'dark' ? theme.white : theme.black,
	},

	afterFooter: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: theme.spacing.xl,
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,
		borderTop: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
		}`,

		[theme.fn.smallerThan('sm')]: {
			flexDirection: 'column',
		},
	},

	social: {
		[theme.fn.smallerThan('sm')]: {
			marginTop: theme.spacing.xs,
		},
	},
}));

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
