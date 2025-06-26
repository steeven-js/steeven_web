import React from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Button,
    Stack,
    Chip,
    Avatar,
    IconButton,
    useTheme,
    alpha,
} from '@mui/material';
import {
    GitHub as GitHubIcon,
    Launch as LaunchIcon,
    Code as CodeIcon,
    Star as StarIcon,
} from '@mui/icons-material';
import { MuiDashboardLayout } from '../layouts/mui-dashboard-layout';

// ----------------------------------------------------------------------

interface ProjectCardProps {
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    status: 'completed' | 'in-progress' | 'planned';
    rating?: number;
}

function ProjectCard({
    title,
    description,
    image,
    technologies,
    githubUrl,
    liveUrl,
    status,
    rating = 0,
}: ProjectCardProps) {
    const theme = useTheme();

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'completed': return 'success';
            case 'in-progress': return 'warning';
            case 'planned': return 'info';
            default: return 'default';
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'completed': return 'Terminé';
            case 'in-progress': return 'En cours';
            case 'planned': return 'Planifié';
            default: return status;
        }
    };

    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6,
                },
            }}
        >
            {/* Project Image */}
            {image && (
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt={title}
                    sx={{
                        objectFit: 'cover',
                        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.1)})`,
                    }}
                />
            )}

            <CardContent sx={{ flexGrow: 1, p: 3 }}>
                {/* Header */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" fontWeight="bold" sx={{ flex: 1 }}>
                        {title}
                    </Typography>
                    <Chip
                        label={getStatusLabel(status)}
                        color={getStatusColor(status) as any}
                        size="small"
                        sx={{ ml: 1 }}
                    />
                </Box>

                {/* Rating */}
                {rating > 0 && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        {[...Array(5)].map((_, index) => (
                            <StarIcon
                                key={index}
                                sx={{
                                    fontSize: 18,
                                    color: index < rating ? 'warning.main' : 'grey.300',
                                }}
                            />
                        ))}
                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                            ({rating}/5)
                        </Typography>
                    </Box>
                )}

                {/* Description */}
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 3, lineHeight: 1.6 }}
                >
                    {description}
                </Typography>

                {/* Technologies */}
                <Box sx={{ mb: 3 }}>
                    <Typography variant="body2" fontWeight="medium" sx={{ mb: 1 }}>
                        Technologies :
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                        {technologies.map((tech, index) => (
                            <Chip
                                key={index}
                                label={tech}
                                size="small"
                                variant="outlined"
                                sx={{
                                    borderColor: alpha(theme.palette.primary.main, 0.3),
                                    color: 'primary.main',
                                    '&:hover': {
                                        backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                    },
                                }}
                            />
                        ))}
                    </Stack>
                </Box>

                {/* Actions */}
                <Stack direction="row" spacing={1} sx={{ mt: 'auto' }}>
                    {githubUrl && (
                        <Button
                            variant="outlined"
                            size="small"
                            startIcon={<GitHubIcon />}
                            href={githubUrl}
                            target="_blank"
                            sx={{ flex: 1 }}
                        >
                            Code
                        </Button>
                    )}
                    {liveUrl && (
                        <Button
                            variant="contained"
                            size="small"
                            startIcon={<LaunchIcon />}
                            href={liveUrl}
                            target="_blank"
                            sx={{ flex: 1 }}
                        >
                            Voir le projet
                        </Button>
                    )}
                </Stack>
            </CardContent>
        </Card>
    );
}

export default function PortfolioPage() {
    const theme = useTheme();

    const projects = [
        {
            title: 'Dashboard Madinia',
            description: 'Système complet de gestion d\'entreprise avec Laravel et React. Interface moderne avec gestion des clients, factures, devis et services.',
            technologies: ['Laravel', 'React', 'TypeScript', 'Inertia.js', 'Tailwind CSS'],
            status: 'completed' as const,
            rating: 5,
            githubUrl: 'https://github.com/user/madinia-dashboard',
            liveUrl: 'https://madinia.example.com',
        },
        {
            title: 'Landing Page Madinia',
            description: 'Page de présentation moderne avec animations et design responsive. Optimisée pour la conversion et le SEO.',
            technologies: ['React', 'Material-UI', 'Framer Motion', 'Next.js'],
            status: 'completed' as const,
            rating: 4,
            githubUrl: 'https://github.com/user/madinia-landing',
            liveUrl: 'https://landing.madinia.example.com',
        },
        {
            title: 'Template Laravel-React',
            description: 'Template de démarrage pour applications Laravel avec React et Material-UI. Configuration complète avec authentification.',
            technologies: ['Laravel', 'React', 'Material-UI', 'TypeScript', 'Vite'],
            status: 'in-progress' as const,
            rating: 4,
            githubUrl: 'https://github.com/user/laravel-react-template',
        },
        {
            title: 'E-commerce Platform',
            description: 'Plateforme e-commerce complète avec gestion des commandes, paiements et inventaire. Interface admin et client.',
            technologies: ['Laravel', 'Vue.js', 'Stripe', 'Redis', 'MySQL'],
            status: 'planned' as const,
        },
        {
            title: 'Blog Personnel',
            description: 'Blog personnel avec système de commentaires, catégories et recherche avancée. Interface d\'administration complète.',
            technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript'],
            status: 'completed' as const,
            rating: 3,
            liveUrl: 'https://blog.example.com',
        },
        {
            title: 'API GraphQL',
            description: 'API GraphQL moderne avec authentification JWT, cache Redis et documentation interactive.',
            technologies: ['Node.js', 'GraphQL', 'Apollo Server', 'MongoDB', 'Redis'],
            status: 'in-progress' as const,
            rating: 4,
            githubUrl: 'https://github.com/user/graphql-api',
        },
    ];

    return (
        <MuiDashboardLayout>
            <Container maxWidth="lg">
                {/* Header */}
                <Box sx={{ mb: 6 }}>
                    <Typography
                        variant="h3"
                        fontWeight="bold"
                        sx={{
                            mb: 2,
                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        Mon Portefeuille
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                        Découvrez mes projets et réalisations récentes
                    </Typography>

                    {/* Stats */}
                    <Stack direction="row" spacing={4} sx={{ mb: 4 }}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h4" fontWeight="bold" color="primary.main">
                                {projects.filter(p => p.status === 'completed').length}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Projets terminés
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h4" fontWeight="bold" color="warning.main">
                                {projects.filter(p => p.status === 'in-progress').length}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                En cours
                            </Typography>
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                            <Typography variant="h4" fontWeight="bold" color="info.main">
                                {projects.filter(p => p.status === 'planned').length}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Planifiés
                            </Typography>
                        </Box>
                    </Stack>
                </Box>

                {/* Projects Grid */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                        },
                        gap: 3,
                    }}
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </Box>

                {/* Call to Action */}
                <Box
                    sx={{
                        mt: 8,
                        p: 4,
                        borderRadius: 2,
                        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(theme.palette.secondary.main, 0.1)})`,
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                        Vous avez un projet en tête ?
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        N'hésitez pas à me contacter pour discuter de votre projet
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            '&:hover': {
                                background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                            },
                        }}
                    >
                        Me contacter
                    </Button>
                </Box>
            </Container>
        </MuiDashboardLayout>
    );
}
