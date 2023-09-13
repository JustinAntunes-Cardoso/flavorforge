import { Global } from '@mantine/core';
import hyperionReg from '../../assets/fonts/Hyperion/Hyperion-Regular.otf';
import hyperionBold from '../../assets/fonts/Hyperion/Hyperion-Bold.otf';
import regular from '../../assets/fonts/Greycliff-CF/greycliffcf-regular.otf';
import bold from '../../assets/fonts/Greycliff-CF/greycliffcf-bold.otf';
import heavy from '../../assets/fonts/Greycliff-CF/greycliffcf-heavy.otf';

const GlobalFonts = () => {

    return (
        <Global
            styles={[
                {
                    '@font-face': {
                        fontFamily: 'Hyperion',
                        src: `url('${hyperionReg}') format("otf")`,
                        fontWeight: 400,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Hyperion',
                        src: `url('${hyperionBold}') format("otf")`,
                        fontWeight: 700,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Greycliff CF',
                        src: `url('${regular}') format("otf")`,
                        fontWeight: 400,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Greycliff CF',
                        src: `url('${bold}') format("otf")`,
                        fontWeight: 700,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Greycliff CF',
                        src: `url('${heavy}') format("otf")`,
                        fontWeight: 900,
                        fontStyle: 'normal',
                    },
                },
            ]}
        />
    );
}

export default GlobalFonts;