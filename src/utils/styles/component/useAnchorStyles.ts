import { createStyles } from '@mantine/core';

const useAnchorStyles = createStyles((theme) => ({
	anchor: {
		[theme.fn.smallerThan('xs')]: {
			flex: 1,
		},
		color: theme.white,
		backgroundColor: theme.colors.brand[6],
		borderColor: theme.colors.accents[7],
		'&:hover': {
			backgroundColor: theme.colors.accents[3],
			borderColor: theme.colors.accents[7],
		},
	},
}));

export default useAnchorStyles;
