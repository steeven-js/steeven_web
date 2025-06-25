# Guide d'intégration Material-UI dans steeven_web

## 🎯 Vue d'ensemble

Ce guide explique comment utiliser les composants Material-UI intégrés dans votre projet Laravel + Inertia.js.

## 📦 Packages installés

- `@mui/material` - Composants de base Material-UI
- `@mui/icons-material` - Icônes Material-UI
- `@mui/lab` - Composants expérimentaux
- `@mui/x-data-grid` - DataGrid avancé
- `@mui/x-date-pickers` - Sélecteurs de date
- `@emotion/react` & `@emotion/styled` - Styled components
- `@fontsource-variable/public-sans` - Police Public Sans
- `framer-motion` - Animations fluides

## 🏗️ Structure du thème

```
resources/js/theme/mui/
├── index.ts              # Export principal
├── theme-config.ts       # Configuration des couleurs et fonts
├── create-theme.ts       # Création du thème MUI
├── theme-provider.tsx    # Provider global
├── palette.ts            # Palette de couleurs light/dark
├── typography.ts         # Configuration typographique
└── components.ts         # Customisation des composants
```

## 🚀 Utilisation de base

### 1. Le thème est déjà configuré globalement

Le `ThemeProvider` est intégré dans `app.tsx`, tous vos composants ont accès au thème MUI.

### 2. Layout Dashboard

```tsx
import { MuiDashboardLayout } from '../layouts/mui-dashboard-layout';

export default function MaPage() {
  return (
    <MuiDashboardLayout title="Mon Dashboard">
      {/* Votre contenu ici */}
    </MuiDashboardLayout>
  );
}
```

### 3. Utilisation des composants

```tsx
import { Button, Card, Typography, Box } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

export default function ExempleComposant() {
  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Mon titre
      </Typography>
      
      <Button 
        variant="contained" 
        startIcon={<AddIcon />}
        onClick={() => console.log('Clicked!')}
      >
        Ajouter
      </Button>
    </Card>
  );
}
```

## 🎨 Palette de couleurs

### Couleurs principales
```tsx
// Dans votre composant
<Button color="primary">Bleu principal</Button>
<Button color="secondary">Violet secondaire</Button>
<Button color="success">Vert succès</Button>
<Button color="warning">Orange avertissement</Button>
<Button color="error">Rouge erreur</Button>
<Button color="info">Cyan info</Button>
```

### Couleurs personnalisées (sx prop)
```tsx
<Box sx={{ 
  backgroundColor: 'primary.lighter',  // Bleu très clair
  color: 'primary.darker',            // Bleu très foncé
  borderColor: 'grey.300'             // Gris moyen
}}>
  Contenu stylé
</Box>
```

## 📱 Layouts disponibles

### 1. MuiDashboardLayout
Layout principal avec navigation latérale et header.

**Props:**
- `children` - Contenu de la page
- `title` - Titre affiché dans le header

**Navigation configurée:**
- Dashboard (`/dashboard`)
- Profile (`/settings/profile`)
- Settings (`/settings/account`)
- Logout (action automatique)

## 🔧 Personnalisation du thème

### Modifier les couleurs
Éditez `resources/js/theme/mui/theme-config.ts`:

```tsx
palette: {
  primary: {
    main: '#2196F3',      // Votre couleur principale
    light: '#64B5F6',     // Version claire
    dark: '#1976D2',      // Version foncée
    // ...
  }
}
```

### Modifier la typographie
Éditez `resources/js/theme/mui/typography.ts`:

```tsx
h1: {
  fontSize: '2.5rem',     // Taille des titres H1
  fontWeight: 800,        // Poids de la police
  // ...
}
```

### Customiser les composants
Éditez `resources/js/theme/mui/components.ts`:

```tsx
MuiButton: {
  styleOverrides: {
    root: {
      borderRadius: 12,   // Bordures plus arrondies
      textTransform: 'none', // Pas de majuscules
      // ...
    }
  }
}
```

## 📋 Exemples pratiques

### Page de test complète
Visitez `/mui-dashboard` pour voir tous les composants en action.

### Composants utiles créés
- `Logo` dans `components/mui/logo.tsx`
- `MuiDashboardLayout` dans `layouts/mui-dashboard-layout.tsx`

## ⚡ Performance

### Optimisations appliquées
- Police `Public Sans Variable` pour de meilleures performances
- Thème optimisé pour le SSR avec Inertia.js  
- Composants customisés pour éviter les re-renders inutiles

### Lazy loading recommandé
```tsx
// Pour les gros composants
const DataGrid = lazy(() => import('@mui/x-data-grid').then(m => ({ default: m.DataGrid })));
```

## 🔄 Cohabitation avec Tailwind

MUI et Tailwind cohabitent parfaitement :
- MUI pour les composants UI complexes
- Tailwind pour l'espacement et les utilitaires rapides

```tsx
// Combinaison possible
<Box className="flex items-center space-x-4" sx={{ p: 2 }}>
  <Button variant="contained">MUI Button</Button>
  <div className="text-gray-600">Tailwind text</div>
</Box>
```

## 🚀 Prochaines étapes

1. **Créez vos propres composants** dans `components/mui/`
2. **Adaptez les couleurs** à votre charte graphique
3. **Ajoutez des pages** utilisant `MuiDashboardLayout`
4. **Explorez** les composants avancés (`@mui/x-data-grid`, `@mui/x-date-pickers`)

## 📚 Ressources utiles

- [Documentation MUI](https://mui.com/)
- [System de couleurs MUI](https://mui.com/customization/color/)
- [Composants MUI](https://mui.com/components/)
- [Icônes Material](https://mui.com/components/material-icons/)

---

**✅ Template MUI parfaitement intégré dans votre projet Laravel + Inertia.js !** 
