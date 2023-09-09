import { createStyles } from '@mantine/core';

const useButtonStyles = createStyles((theme) => ({
	control: {
		[theme.fn.smallerThan('xs')]: {
			flex: 1,
		},
		backgroundColor: theme.colors.secondary[3],
		'&:hover': {
			backgroundColor: theme.colors.secondary[5],
			borderColor: theme.colors.secondary[4],
		},
	},
}));

export default useButtonStyles;
