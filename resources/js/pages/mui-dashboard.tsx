import React from 'react';
import {
    Box,
    Card,
    CardContent,
    Typography,
    Paper,
    Button,
    Chip,
    Avatar,
    LinearProgress,
} from '@mui/material';
import {
    TrendingUp as TrendingUpIcon,
    People as PeopleIcon,
    ShoppingCart as ShoppingCartIcon,
    AttachMoney as AttachMoneyIcon,
} from '@mui/icons-material';
import { MuiDashboardLayout } from '../layouts/mui-dashboard-layout';

// ----------------------------------------------------------------------

interface StatCardProps {
    title: string;
    value: string;
    icon: React.ReactNode;
    color: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    trend?: string;
}

function StatCard({ title, value, icon, color, trend }: StatCardProps) {
    return (
        <Card
            sx={{
                p: 3,
                textAlign: 'center',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                },
            }}
        >
            <Box
                sx={{
                    width: 64,
                    height: 64,
                    mx: 'auto',
                    mb: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    backgroundColor: `${color}.lighter`,
                    color: `${color}.main`,
                }}
            >
                {icon}
            </Box>

            <Typography variant="h4" fontWeight="bold" color="text.primary">
                {value}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {title}
            </Typography>

            {trend && (
                <Chip
                    label={trend}
                    size="small"
                    color={trend.startsWith('+') ? 'success' : 'error'}
                    variant="outlined"
                />
            )}
        </Card>
    );
}

interface ProjectCardProps {
    name: string;
    description: string;
    progress: number;
    status: 'Active' | 'Completed' | 'Pending';
    team: string[];
}

function ProjectCard({ name, description, progress, status, team }: ProjectCardProps) {
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active': return 'primary';
            case 'Completed': return 'success';
            case 'Pending': return 'warning';
            default: return 'default';
        }
    };

    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" fontWeight="bold">
                        {name}
                    </Typography>
                    <Chip
                        label={status}
                        color={getStatusColor(status) as any}
                        size="small"
                    />
                </Box>

                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {description}
                </Typography>

                <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                            Progression
                        </Typography>
                        <Typography variant="body2" fontWeight="medium">
                            {progress}%
                        </Typography>
                    </Box>
                    <LinearProgress
                        variant="determinate"
                        value={progress}
                        sx={{ height: 8, borderRadius: 1 }}
                    />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                        Team:
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5 }}>
                        {team.map((member, index) => (
                            <Avatar
                                key={index}
                                sx={{ width: 24, height: 24, fontSize: '0.75rem' }}
                            >
                                {member}
                            </Avatar>
                        ))}
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default function MuiDashboardPage() {
    const stats = [
        {
            title: 'Total des ventes',
            value: '€24,500',
            icon: <AttachMoneyIcon fontSize="large" />,
            color: 'success' as const,
            trend: '+12.5%',
        },
        {
            title: 'Nouveaux clients',
            value: '1,240',
            icon: <PeopleIcon fontSize="large" />,
            color: 'info' as const,
            trend: '+8.2%',
        },
        {
            title: 'Commandes',
            value: '892',
            icon: <ShoppingCartIcon fontSize="large" />,
            color: 'warning' as const,
            trend: '+15.1%',
        },
        {
            title: 'Croissance',
            value: '18.5%',
            icon: <TrendingUpIcon fontSize="large" />,
            color: 'primary' as const,
            trend: '+2.3%',
        },
    ];

    const projects = [
        {
            name: 'Dashboard Madinia',
            description: 'Système de gestion d\'entreprise avec Laravel et React',
            progress: 85,
            status: 'Active' as const,
            team: ['SJ', 'AB', 'CD'],
        },
        {
            name: 'E-commerce Platform',
            description: 'Plateforme de commerce électronique moderne',
            progress: 60,
            status: 'Active' as const,
            team: ['SJ', 'EF'],
        },
        {
            name: 'Mobile App',
            description: 'Application mobile React Native',
            progress: 100,
            status: 'Completed' as const,
            team: ['SJ', 'GH', 'IJ'],
        },
        {
            name: 'API Integration',
            description: 'Intégration des APIs tierces',
            progress: 25,
            status: 'Pending' as const,
            team: ['KL'],
        },
    ];

    return (
        <MuiDashboardLayout title="Dashboard MUI">
            <Box>
                {/* Page Header */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h4" fontWeight="bold" color="text.primary" gutterBottom>
                        Bienvenue dans le Dashboard MUI ! 👋
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Voici un aperçu de votre tableau de bord avec Material-UI intégré.
                    </Typography>
                </Box>

                {/* Stats Cards */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' },
                        gap: 3,
                        mb: 4
                    }}
                >
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </Box>

                {/* Recent Projects */}
                <Box sx={{ mb: 4 }}>
                    <Typography variant="h5" fontWeight="bold" color="text.primary" gutterBottom>
                        Projets récents
                    </Typography>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' },
                            gap: 3
                        }}
                    >
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </Box>
                </Box>

                {/* Actions */}
                <Paper sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Actions rapides
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button variant="contained" color="primary">
                            Nouveau projet
                        </Button>
                        <Button variant="outlined" color="secondary">
                            Voir les rapports
                        </Button>
                        <Button variant="text" color="info">
                            Paramètres
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </MuiDashboardLayout>
    );
}
