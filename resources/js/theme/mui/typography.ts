import { themeConfig } from './theme-config';

// ----------------------------------------------------------------------

export const typography = {
    fontFamily: themeConfig.fontFamily.primary,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
        fontWeight: 800,
        lineHeight: 80 / 64,
        fontSize: '2.25rem', // 36px
        letterSpacing: 0,
    },
    h2: {
        fontWeight: 800,
        lineHeight: 64 / 48,
        fontSize: '1.875rem', // 30px
        letterSpacing: 0,
    },
    h3: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: '1.5rem', // 24px
        letterSpacing: 0,
    },
    h4: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: '1.25rem', // 20px
        letterSpacing: 0,
    },
    h5: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: '1.125rem', // 18px
        letterSpacing: 0,
    },
    h6: {
        fontWeight: 600,
        lineHeight: 28 / 18,
        fontSize: '1rem', // 16px
        letterSpacing: 0,
    },
    subtitle1: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: '1rem', // 16px
    },
    subtitle2: {
        fontWeight: 600,
        lineHeight: 22 / 14,
        fontSize: '0.875rem', // 14px
    },
    body1: {
        lineHeight: 1.5,
        fontSize: '1rem', // 16px
    },
    body2: {
        lineHeight: 22 / 14,
        fontSize: '0.875rem', // 14px
    },
    caption: {
        lineHeight: 1.5,
        fontSize: '0.75rem', // 12px
    },
    overline: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: '0.75rem', // 12px
        textTransform: 'uppercase' as const,
    },
    button: {
        fontWeight: 700,
        lineHeight: 24 / 14,
        fontSize: '0.875rem', // 14px
        textTransform: 'unset' as const,
    },
};
