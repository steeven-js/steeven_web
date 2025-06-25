import { createTheme as createMuiTheme, type Theme } from '@mui/material/styles';
import { themeConfig } from './theme-config';
import { palette } from './palette';
import { typography } from './typography';
import { components } from './components';

// ----------------------------------------------------------------------

export function createTheme(): Theme {
    const baseTheme = createMuiTheme({
        palette: palette.light,
        typography,
        shape: {
            borderRadius: 8
        },
        direction: themeConfig.direction,
        components,
    });

    return baseTheme;
}

export function createDarkTheme(): Theme {
    const darkTheme = createMuiTheme({
        palette: palette.dark,
        typography,
        shape: {
            borderRadius: 8
        },
        direction: themeConfig.direction,
        components,
    });

    return darkTheme;
}
