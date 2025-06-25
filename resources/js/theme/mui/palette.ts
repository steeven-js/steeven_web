import { alpha } from '@mui/material/styles';
import { themeConfig } from './theme-config';

// ----------------------------------------------------------------------

export const palette = {
    light: {
        mode: 'light' as const,
        primary: {
            ...themeConfig.palette.primary,
        },
        secondary: {
            ...themeConfig.palette.secondary,
        },
        info: {
            ...themeConfig.palette.info,
        },
        success: {
            ...themeConfig.palette.success,
        },
        warning: {
            ...themeConfig.palette.warning,
        },
        error: {
            ...themeConfig.palette.error,
        },
        grey: {
            ...themeConfig.palette.grey,
        },
        common: {
            ...themeConfig.palette.common,
        },
        background: {
            paper: '#FFFFFF',
            default: '#FAFAFA',
        },
        text: {
            primary: themeConfig.palette.grey['800'],
            secondary: themeConfig.palette.grey['600'],
            disabled: themeConfig.palette.grey['500'],
        },
        divider: alpha(themeConfig.palette.grey['500'], 0.2),
        action: {
            hover: alpha(themeConfig.palette.grey['500'], 0.08),
            selected: alpha(themeConfig.palette.grey['500'], 0.12),
            disabled: alpha(themeConfig.palette.grey['500'], 0.8),
            disabledBackground: alpha(themeConfig.palette.grey['500'], 0.24),
            focus: alpha(themeConfig.palette.grey['500'], 0.24),
        },
    },
    dark: {
        mode: 'dark' as const,
        primary: {
            ...themeConfig.palette.primary,
        },
        secondary: {
            ...themeConfig.palette.secondary,
        },
        info: {
            ...themeConfig.palette.info,
        },
        success: {
            ...themeConfig.palette.success,
        },
        warning: {
            ...themeConfig.palette.warning,
        },
        error: {
            ...themeConfig.palette.error,
        },
        grey: {
            ...themeConfig.palette.grey,
        },
        common: {
            ...themeConfig.palette.common,
        },
        background: {
            paper: themeConfig.palette.grey['900'],
            default: themeConfig.palette.grey['900'],
        },
        text: {
            primary: '#FFFFFF',
            secondary: themeConfig.palette.grey['300'],
            disabled: themeConfig.palette.grey['600'],
        },
        divider: alpha(themeConfig.palette.grey['300'], 0.2),
        action: {
            hover: alpha(themeConfig.palette.grey['300'], 0.08),
            selected: alpha(themeConfig.palette.grey['300'], 0.12),
            disabled: alpha(themeConfig.palette.grey['300'], 0.8),
            disabledBackground: alpha(themeConfig.palette.grey['300'], 0.24),
            focus: alpha(themeConfig.palette.grey['300'], 0.24),
        },
    },
};
