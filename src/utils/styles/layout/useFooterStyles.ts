import { createStyles, rem } from '@mantine/core';

const useFooterStyles = createStyles((theme) => ({
	footer: {
		paddingTop: `calc(${theme.spacing.xl} * 2)`,
		paddingBottom: `calc(${theme.spacing.xl} * 2)`,
		backgroundColor:
			theme.colorScheme === 'dark'
				? theme.colors.dark[6]
				: theme.colors.brand[3],
		borderTop: `${rem(1)} solid ${
			theme.colorScheme === 'dark'
				? theme.colors.dark[5]
				: theme.colors.brand[7]
		}`,
	},

	logo: {
		[theme.fn.smallerThan('sm')]: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
	},

	bluefin: {
		maxWidth: rem(80),
	},

	bluefinText: {
		fontFamily: 'Hyperion',
	},

	company: {
		display: 'flex',
		flexDirection: 'row',
	},

	description: {
		marginTop: '0.1rem',
		color: theme.colors.accents[8],
		fontSize: theme.fontSizes.sm,
		width: '20rem',

		[theme.fn.smallerThan('sm')]: {
			marginTop: theme.spacing.xs,
			textAlign: 'center',
		},
	},

	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',

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
				: theme.colors.accents[8],
		fontSize: theme.fontSizes.md,
		paddingTop: rem(3),
		paddingBottom: rem(3),

		'&:hover': {
			textDecoration: 'underline',
		},
	},

	title: {
		fontSize: theme.fontSizes.xl,
		fontWeight: 700,
		fontFamily: `Greycliff CF, ${theme.fontFamily}`,
		marginBottom: `calc(${theme.spacing.xs} / 2)`,
		color: theme.colorScheme === 'dark' ? theme.white : theme.white,
	},

	afterFooter: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: theme.spacing.xl,
		paddingTop: theme.spacing.xl,
		paddingBottom: theme.spacing.xl,
		borderTop: `${rem(1)} solid ${
			theme.colorScheme === 'dark'
				? theme.colors.dark[4]
				: theme.colors.brand[7]
		}`,

		[theme.fn.smallerThan('sm')]: {
			flexDirection: 'column',
		},
	},

	license: {
		color: theme.colors.accents[8],
	},

	social: {
		color: theme.colors.accents[8],
		[theme.fn.smallerThan('sm')]: {
			marginTop: theme.spacing.xs,
		},
	},
}));

export default useFooterStyles;
