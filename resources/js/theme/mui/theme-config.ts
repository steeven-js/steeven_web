import type { Direction, CommonColors, ThemeProviderProps } from '@mui/material/styles';

// ----------------------------------------------------------------------

export type ThemeConfig = {
    direction: Direction;
    defaultMode: ThemeProviderProps['defaultMode'];
    modeStorageKey: string;
    fontFamily: Record<'primary' | 'secondary', string>;
    palette: {
        primary: {
            lighter: string;
            light: string;
            main: string;
            dark: string;
            darker: string;
            contrastText: string;
        };
        secondary: {
            lighter: string;
            light: string;
            main: string;
            dark: string;
            darker: string;
            contrastText: string;
        };
        info: {
            lighter: string;
            light: string;
            main: string;
            dark: string;
            darker: string;
            contrastText: string;
        };
        success: {
            lighter: string;
            light: string;
            main: string;
            dark: string;
            darker: string;
            contrastText: string;
        };
        warning: {
            lighter: string;
            light: string;
            main: string;
            dark: string;
            darker: string;
            contrastText: string;
        };
        error: {
            lighter: string;
            light: string;
            main: string;
            dark: string;
            darker: string;
            contrastText: string;
        };
        grey: {
            [K in 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 as `${K}`]: string;
        };
        common: Pick<CommonColors, 'black' | 'white'>;
    };
};

export const themeConfig: ThemeConfig = {
    /** **************************************
     * Base
     *************************************** */
    defaultMode: 'light',
    modeStorageKey: 'mui-theme-mode',
    direction: 'ltr',
    /** **************************************
     * Typography
     *************************************** */
    fontFamily: {
        primary: 'Public Sans Variable, system-ui, sans-serif',
        secondary: 'Inter Variable, system-ui, sans-serif',
    },
    /** **************************************
     * Palette - Adaptée pour steeven_web
     *************************************** */
    palette: {
        primary: {
            lighter: '#E3F2FD',
            light: '#64B5F6',
            main: '#2196F3',
            dark: '#1976D2',
            darker: '#0D47A1',
            contrastText: '#FFFFFF',
        },
        secondary: {
            lighter: '#F3E5F5',
            light: '#CE93D8',
            main: '#9C27B0',
            dark: '#7B1FA2',
            darker: '#4A148C',
            contrastText: '#FFFFFF',
        },
        info: {
            lighter: '#E0F7FA',
            light: '#4DD0E1',
            main: '#00BCD4',
            dark: '#0097A7',
            darker: '#006064',
            contrastText: '#FFFFFF',
        },
        success: {
            lighter: '#E8F5E8',
            light: '#81C784',
            main: '#4CAF50',
            dark: '#388E3C',
            darker: '#1B5E20',
            contrastText: '#FFFFFF',
        },
        warning: {
            lighter: '#FFF3E0',
            light: '#FFB74D',
            main: '#FF9800',
            dark: '#F57C00',
            darker: '#E65100',
            contrastText: '#000000',
        },
        error: {
            lighter: '#FFEBEE',
            light: '#EF5350',
            main: '#F44336',
            dark: '#D32F2F',
            darker: '#B71C1C',
            contrastText: '#FFFFFF',
        },
        grey: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#EEEEEE',
            300: '#E0E0E0',
            400: '#BDBDBD',
            500: '#9E9E9E',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
        },
        common: {
            black: '#000000',
            white: '#FFFFFF',
        },
    },
};