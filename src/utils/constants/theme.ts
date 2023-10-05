import { createTheme } from '@mantine/core';

const globalTheme = createTheme({
	colors: {
		brand: [
			'#E65100',
			'#EF6C00',
			'#F57C00',
			'#FB8C00',
			'#FF9800',
			'#FFA726',
			'#FFB74D',
			'#FFE082',
			'#FFECB3',
			'#FFF6E1',
		],
		secondary: [
			'#33691E',
			'#558B2F',
			'#689F38',
			'#7CB342',
			'#8BC34A',
			'#9CCC65',
			'#AED581',
			'#E6EE9C',
			'#DCEDC8',
			'#F2FCE8',
		],
		accents: [
			'#F57F17',
			'#F9A825',
			'#FBC02D',
			'#FBC02D',
			'#FFEB3B',
			'#FFEE58',
			'#FFEE58',
			'#FFF59D',
			'#FFF9C4',
			'#FFFEE0',
		],
	},
	primaryColor: 'brand',
	fontFamily: 'Greycliff CF, sans-serif',
});

export default globalTheme;
