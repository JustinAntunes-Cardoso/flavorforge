import { createStyles, rem } from '@mantine/core';

const useRecipeCard = createStyles((theme) => ({
	card: {
		maxWidth: rem(300),
		position: 'relative',
		backgroundColor:
			theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
	},

	rating: {
		position: 'absolute',
		top: theme.spacing.xs,
		right: rem(12),
		pointerEvents: 'none',
	},

	title: {
		display: 'block',
		marginTop: theme.spacing.md,
		marginBottom: rem(5),
	},

	action: {
		backgroundColor:
			theme.colorScheme === 'dark'
				? theme.colors.dark[6]
				: theme.colors.gray[0],
		...theme.fn.hover({
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[5]
					: theme.colors.gray[1],
		}),
	},

	footer: {
		marginTop: theme.spacing.md,
	},
}));

export default useRecipeCard;
