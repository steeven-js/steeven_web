import React from 'react';
import { Box, Typography } from '@mui/material';
import { router } from '@inertiajs/react';

// ----------------------------------------------------------------------

interface LogoProps {
    sx?: object;
    onClick?: () => void;
}

export function Logo({ sx, onClick }: LogoProps) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            router.visit('/dashboard');
        }
    };

    return (
        <Box
            onClick={handleClick}
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                cursor: 'pointer',
                '&:hover': {
                    opacity: 0.8,
                },
                ...sx,
            }}
        >
            <Box
                sx={{
                    width: 32,
                    height: 32,
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                    }}
                >
                    S
                </Typography>
            </Box>

            <Typography
                variant="h6"
                sx={{
                    fontWeight: 'bold',
                    color: 'primary.main',
                    display: { xs: 'none', sm: 'block' },
                }}
            >
                Steeven Web
            </Typography>
        </Box>
    );
}
