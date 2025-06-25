import type { Components, Theme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const components: Components<Theme> = {
    // Button
    MuiButton: {
        styleOverrides: {
            root: {
                borderRadius: 8,
                textTransform: 'none',
                fontWeight: 600,
                minHeight: 40,
                '&:hover': {
                    boxShadow: 'none',
                },
            },
            containedPrimary: {
                color: '#FFFFFF',
                '&:hover': {
                    backgroundColor: '#1976D2',
                },
            },
        },
    },

    // Card
    MuiCard: {
        styleOverrides: {
            root: {
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                borderRadius: 12,
                border: '1px solid rgba(0, 0, 0, 0.05)',
            },
        },
    },

    // Paper
    MuiPaper: {
        styleOverrides: {
            root: {
                backgroundImage: 'none',
            },
            outlined: {
                borderColor: alpha('#919EAB', 0.2),
            },
        },
    },

    // TextField
    MuiTextField: {
        styleOverrides: {
            root: {
                '& .MuiOutlinedInput-root': {
                    borderRadius: 8,
                },
            },
        },
    },

    // Chip
    MuiChip: {
        styleOverrides: {
            root: {
                borderRadius: 8,
                height: 32,
            },
        },
    },

    // Dialog
    MuiDialog: {
        styleOverrides: {
            paper: {
                borderRadius: 16,
            },
        },
    },

    // AppBar
    MuiAppBar: {
        styleOverrides: {
            root: {
                boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
            },
        },
    },
};