export const theme = {
    colors: {
        // Couleurs primaires et secondaires - le cœur de votre marque
        // 'primary' et 'accent' sont souvent de bons choix pour les ONG, évoquant l'espoir et l'action.
        primary: '#4CAF50',        // Un vert terreux et invitant (inspiré du #00AC62 que vous aviez, mais plus doux)
        primaryDark: '#388E3C',    // Une version plus foncée pour les états actifs ou les arrière-plans plus sombres
        primaryLight: '#81C784',   // Une version plus claire pour les éléments subtils ou les dégradés

        accent: '#2196F3',         // Un bleu ciel vif et rassurant (pour les CTA, les icônes importantes)
        accentDark: '#1976D2',     // Version plus foncée de l'accent
        accentLight: '#64B5F6',    // Version plus claire de l'accent

        // Couleurs de texte - cruciales pour la lisibilité
        textPrimary: '#212121',    // Noir profond pour le texte principal (titres, paragraphes importants)
        textSecondary: '#757575',  // Gris moyen pour le texte secondaire (descriptions, légendes)
        textLight: '#B0BEC5',      // Gris très clair pour le texte sur des arrière-plans sombres ou les placeholders
        textOnPrimary: '#FFFFFF',  // Texte blanc pour les arrière-plans primaires
        textOnAccent: '#FFFFFF',   // Texte blanc pour les arrière-plans accentués

        // Couleurs de fond et de surface - la toile de votre application
        background: '#F5F5F5',     // Un gris très clair, presque blanc, pour l'arrière-plan général
        surface: '#FFFFFF',        // Blanc pur pour les cartes, modales et éléments surélevés

        // Couleurs d'état - pour les actions et les retours visuels
        success: '#4CAF50',        // Vert pour le succès/confirmation
        warning: '#FFC107',        // Jaune-orange pour les avertissements
        error: '#D32F2F',          // Rouge pour les erreurs/actions destructrices

        // Couleurs de bordure et séparateurs
        border: '#E0E0E0',         // Un gris clair pour les bordures et les séparateurs

        // Anciennes couleurs non utilisées ou redéfinies (nettoyage)
        // dark: '#3E3E3E',         // Remplacé par textPrimary
        // darkLight: '#E1E1E1',    // Remplacé par border
        // gray: '#e3e3e3',         // Remplacé par border
        // rose: '#0f4444',         // Supprimé si non utilisé ou intégré différemment
        // roseLight: '#f87171',    // Supprimé si non utilisé
        // onSecondary: '#000000',  // Remplacé par textOnAccent
        // onBackground: '#000000', // Remplacé par textPrimary
        // onSurface: '#000000',    // Remplacé par textPrimary
        // onError: '#ffffff'       // Remplacé par textOnPrimary (si le texte sur l'erreur est blanc)
    },
    fonts: {
        // Les poids de police sont des strings pour React Native StyleSheet
        regular: '400', // Standard
        medium: '500',  // Pour un peu plus d'emphase
        semibold: '600', // Bon pour les titres secondaires, boutons
        bold: '700',    // Titres principaux, forte emphase
        extraBold: '800', // Pour un impact maximal

        // Si vous utilisez des polices personnalisées, les noms devraient correspondre à ceux chargés
        // 'Roboto-Light' et 'Roboto-Thin' sont de bons exemples si vous les avez chargés
        light: '300', // Poids numérique si vous n'avez pas de police personnalisée, sinon 'Roboto-Light'
        thin: '100'   // Poids numérique, sinon 'Roboto-Thin'
    },
    radius: {
        xxs: 4,      // Très petits coins (boutons étroits)
        xs: 8,       // Petits coins (champs de texte, petites cartes)
        sm: 12,      // Coins moyens (boutons, éléments de liste)
        md: 16,      // Coins plus prononcés (cartes plus grandes)
        lg: 24,      // Coins arrondis (grandes cartes, modales)
        xl: 32,      // Très arrondis (profils, avatars)
        circle: 999  // Pour les cercles parfaits (avatars, FABs)
    },
    // Vous pouvez également ajouter d'autres éléments de design ici, par exemple:
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
    },
    shadows: {
        // Ombres légères pour donner de la profondeur (à utiliser avec modération)
        sm: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.2,
            shadowRadius: 1.41,
            elevation: 2,
        },
        md: {
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
        },
    },
};













// i made some changes to the theme file to make it more consistent and readable.





// export const theme = {
//     colors: {
//         primary: '#6200ee',
//         primaryDark: '#00AC62',
//         dark: '#3E3E3E',
//         darkLight: '#E1E1E1',
//         gray: '#e3e3e3',
//         secondary: '#03dac6',
//         background: '#f5f5f5',
//         surface: '#ffffff',
//         text: '#49494949',
//         textDark: '#1D1D1D',


//         rose: '#0f4444',
//         roseLight: '#f87171',
//         onSecondary: '#000000',
//         onBackground: '#000000',
//         onSurface: '#000000',
//         onError: '#ffffff'
//     },
//     fonts: {
//         regular: '500',
//         medium: '600',
//         bold: '700',
//         extraBold: '800',
//         light: 'Roboto-Light',
//         thin: 'Roboto-Thin'
//     },
//     radius: {
//         xs: 18,
//         sm: 12,
//         medium: 8,
//         large: 16,
//         xl: 18,
//         xxl: 24,
//         xxxl: 32,
//     },
// };