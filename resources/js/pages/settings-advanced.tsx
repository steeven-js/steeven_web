import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Switch,
    FormControlLabel,
    Button,
    Stack,
    Divider,
    Alert,
    Tab,
    Tabs,
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    useTheme,
    alpha,
} from '@mui/material';
import {
    Settings as SettingsIcon,
    Security as SecurityIcon,
    Notifications as NotificationsIcon,
    Palette as PaletteIcon,
    Storage as StorageIcon,
    Person as PersonIcon,
} from '@mui/icons-material';
import { MuiDashboardLayout } from '../layouts/mui-dashboard-layout';

// ----------------------------------------------------------------------

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel({ children, value, index }: TabPanelProps) {
    return (
        <div hidden={value !== index}>
            {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
        </div>
    );
}

export default function SettingsAdvancedPage() {
    const theme = useTheme();
    const [tabValue, setTabValue] = useState(0);
    const [settings, setSettings] = useState({
        // General
        darkMode: false,
        compactMode: false,
        language: 'fr',
        timezone: 'Europe/Paris',

        // Notifications
        emailNotifications: true,
        pushNotifications: false,
        marketingEmails: false,
        weeklyReports: true,

        // Security
        twoFactorAuth: false,
        sessionTimeout: 30,
        loginAlerts: true,

        // Performance
        autoSave: true,
        cacheEnabled: true,
        compressionEnabled: true,
    });

    const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const handleSettingChange = (key: string, value: any) => {
        setSettings(prev => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleSave = () => {
        // Simulate save operation
        console.log('Settings saved:', settings);
        // Here you would typically make an API call
    };

    const handleReset = () => {
        // Reset to default values
        setSettings({
            darkMode: false,
            compactMode: false,
            language: 'fr',
            timezone: 'Europe/Paris',
            emailNotifications: true,
            pushNotifications: false,
            marketingEmails: false,
            weeklyReports: true,
            twoFactorAuth: false,
            sessionTimeout: 30,
            loginAlerts: true,
            autoSave: true,
            cacheEnabled: true,
            compressionEnabled: true,
        });
    };

    const tabs = [
        { label: 'Général', icon: <SettingsIcon /> },
        { label: 'Apparence', icon: <PaletteIcon /> },
        { label: 'Notifications', icon: <NotificationsIcon /> },
        { label: 'Sécurité', icon: <SecurityIcon /> },
        { label: 'Performance', icon: <StorageIcon /> },
        { label: 'Profil', icon: <PersonIcon /> },
    ];

    return (
        <MuiDashboardLayout>
            <Container maxWidth="lg">
                {/* Header */}
                <Box sx={{ mb: 4 }}>
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
                        Paramètres Avancés
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                        Personnalisez votre expérience et gérez vos préférences
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', gap: 3 }}>
                    {/* Tabs Navigation */}
                    <Card sx={{ minWidth: 280, height: 'fit-content' }}>
                        <Tabs
                            orientation="vertical"
                            value={tabValue}
                            onChange={handleTabChange}
                            sx={{
                                '& .MuiTab-root': {
                                    alignItems: 'flex-start',
                                    textAlign: 'left',
                                    minHeight: 64,
                                    px: 3,
                                },
                            }}
                        >
                            {tabs.map((tab, index) => (
                                <Tab
                                    key={index}
                                    icon={tab.icon}
                                    label={tab.label}
                                    iconPosition="start"
                                    sx={{
                                        justifyContent: 'flex-start',
                                        gap: 2,
                                    }}
                                />
                            ))}
                        </Tabs>
                    </Card>

                    {/* Tab Content */}
                    <Box sx={{ flex: 1 }}>
                        {/* General Settings */}
                        <TabPanel value={tabValue} index={0}>
                            <Card>
                                <CardContent sx={{ p: 4 }}>
                                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
                                        Paramètres Généraux
                                    </Typography>

                                    <Stack spacing={3}>
                                        <FormControl fullWidth>
                                            <InputLabel>Langue</InputLabel>
                                            <Select
                                                value={settings.language}
                                                label="Langue"
                                                onChange={(e) => handleSettingChange('language', e.target.value)}
                                            >
                                                <MenuItem value="fr">Français</MenuItem>
                                                <MenuItem value="en">English</MenuItem>
                                                <MenuItem value="es">Español</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <FormControl fullWidth>
                                            <InputLabel>Fuseau horaire</InputLabel>
                                            <Select
                                                value={settings.timezone}
                                                label="Fuseau horaire"
                                                onChange={(e) => handleSettingChange('timezone', e.target.value)}
                                            >
                                                <MenuItem value="Europe/Paris">Paris (GMT+1)</MenuItem>
                                                <MenuItem value="Europe/London">Londres (GMT+0)</MenuItem>
                                                <MenuItem value="America/New_York">New York (GMT-5)</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={settings.compactMode}
                                                    onChange={(e) => handleSettingChange('compactMode', e.target.checked)}
                                                />
                                            }
                                            label="Mode compact (interface dense)"
                                        />
                                    </Stack>
                                </CardContent>
                            </Card>
                        </TabPanel>

                        {/* Appearance Settings */}
                        <TabPanel value={tabValue} index={1}>
                            <Card>
                                <CardContent sx={{ p: 4 }}>
                                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
                                        Apparence
                                    </Typography>

                                    <Stack spacing={3}>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={settings.darkMode}
                                                    onChange={(e) => handleSettingChange('darkMode', e.target.checked)}
                                                />
                                            }
                                            label="Mode sombre"
                                        />

                                        <Alert severity="info">
                                            Le mode sombre sera appliqué lors de votre prochaine connexion.
                                        </Alert>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </TabPanel>

                        {/* Notifications Settings */}
                        <TabPanel value={tabValue} index={2}>
                            <Card>
                                <CardContent sx={{ p: 4 }}>
                                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
                                        Notifications
                                    </Typography>

                                    <Stack spacing={3}>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={settings.emailNotifications}
                                                    onChange={(e) => handleSettingChange('emailNotifications', e.target.checked)}
                                                />
                                            }
                                            label="Notifications par email"
                                        />

                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={settings.pushNotifications}
                                                    onChange={(e) => handleSettingChange('pushNotifications', e.target.checked)}
                                                />
                                            }
                                            label="Notifications push"
                                        />

                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={settings.weeklyReports}
                                                    onChange={(e) => handleSettingChange('weeklyReports', e.target.checked)}
                                                />
                                            }
                                            label="Rapports hebdomadaires"
                                        />

                                        <Divider />

                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={settings.marketingEmails}
                                                    onChange={(e) => handleSettingChange('marketingEmails', e.target.checked)}
                                                />
                                            }
                                            label="Emails marketing et promotions"
                                        />
                                    </Stack>
                                </CardContent>
                            </Card>
                        </TabPanel>

                        {/* Security Settings */}
                        <TabPanel value={tabValue} index={3}>
                            <Card>
                                <CardContent sx={{ p: 4 }}>
                                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
                                        Sécurité
                                    </Typography>

                                    <Stack spacing={3}>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={settings.twoFactorAuth}
                                                    onChange={(e) => handleSettingChange('twoFactorAuth', e.target.checked)}
                                                />
                                            }
                                            label="Authentification à deux facteurs"
                                        />

                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={settings.loginAlerts}
                                                    onChange={(e) => handleSettingChange('loginAlerts', e.target.checked)}
                                                />
                                            }
                                            label="Alertes de connexion"
                                        />

                                        <TextField
                                            label="Délai d'expiration de session (minutes)"
                                            type="number"
                                            value={settings.sessionTimeout}
                                            onChange={(e) => handleSettingChange('sessionTimeout', parseInt(e.target.value))}
                                            inputProps={{ min: 5, max: 480 }}
                                        />

                                        {settings.twoFactorAuth && (
                                            <Alert severity="warning">
                                                L'authentification à deux facteurs nécessite une configuration supplémentaire.
                                            </Alert>
                                        )}
                                    </Stack>
                                </CardContent>
                            </Card>
                        </TabPanel>

                        {/* Performance Settings */}
                        <TabPanel value={tabValue} index={4}>
                            <Card>
                                <CardContent sx={{ p: 4 }}>
                                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
                                        Performance
                                    </Typography>

                                    <Stack spacing={3}>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={settings.autoSave}
                                                    onChange={(e) => handleSettingChange('autoSave', e.target.checked)}
                                                />
                                            }
                                            label="Sauvegarde automatique"
                                        />

                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={settings.cacheEnabled}
                                                    onChange={(e) => handleSettingChange('cacheEnabled', e.target.checked)}
                                                />
                                            }
                                            label="Cache des données"
                                        />

                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={settings.compressionEnabled}
                                                    onChange={(e) => handleSettingChange('compressionEnabled', e.target.checked)}
                                                />
                                            }
                                            label="Compression des données"
                                        />

                                        <Alert severity="info">
                                            Ces paramètres peuvent améliorer les performances mais consomment plus de ressources.
                                        </Alert>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </TabPanel>

                        {/* Profile Settings */}
                        <TabPanel value={tabValue} index={5}>
                            <Card>
                                <CardContent sx={{ p: 4 }}>
                                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
                                        Profil Utilisateur
                                    </Typography>

                                    <Stack spacing={3}>
                                        <TextField
                                            label="Nom complet"
                                            defaultValue="Steeven Jacques"
                                            fullWidth
                                        />

                                        <TextField
                                            label="Email"
                                            defaultValue="steeven@example.com"
                                            type="email"
                                            fullWidth
                                        />

                                        <TextField
                                            label="Téléphone"
                                            defaultValue="+33 6 12 34 56 78"
                                            fullWidth
                                        />

                                        <TextField
                                            label="Bio"
                                            multiline
                                            rows={4}
                                            defaultValue="Développeur full-stack passionné par les technologies modernes."
                                            fullWidth
                                        />
                                    </Stack>
                                </CardContent>
                            </Card>
                        </TabPanel>

                        {/* Action Buttons */}
                        <Box sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                            <Button variant="outlined" onClick={handleReset}>
                                Réinitialiser
                            </Button>
                            <Button
                                variant="contained"
                                onClick={handleSave}
                                sx={{
                                    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                    '&:hover': {
                                        background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
                                    },
                                }}
                            >
                                Sauvegarder
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </MuiDashboardLayout>
    );
}
