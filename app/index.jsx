import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native'; // Ajout de View et Pressable si non déjà là
import Button from '../components/Button'; // Import du composant Button personnalisé pour la cohérence
import ScreenWrapper from '../components/ScreenWrapper';
import { theme } from '../constants/theme'; // Import du thème pour les couleurs
import { hp, wp } from '../helpers/common'; // Import des fonctions de dimensionnement réactif

const Index = () => { // Renommé 'index' en 'Index' pour suivre la convention PascalCase pour les composants React
    const router = useRouter();

    return (
        <ScreenWrapper bg={theme.colors.background}> {/* Utilise la couleur de fond du thème */}
            <View style={styles.container}>
                {/* Texte de bienvenue initial ou logo simple pour la page d'accueil */}
                <Text style={styles.welcomeMessage}>Bienvenue sur Yole Africa</Text>
                <Text style={styles.tagline}>L'information au service de la justice.</Text>

                {/* Utilisation de votre composant Button personnalisé pour la cohérence du design */}
                <Button
                    title="Commencer" // Texte d'action clair pour guider l'utilisateur
                    onPress={() => router.push('/welcome')} // Navigation vers l'écran de bienvenue
                    buttonStyle={styles.startButton}
                    textStyle={styles.startButtonText}
                />

                {/* Optionnel: Un lien pour la connexion directe si l'utilisateur ne veut pas passer par l'intro */}
                <Pressable onPress={() => router.push('/login')}>
                    <Text style={styles.loginLink}>Déjà un compte ? Connectez-vous</Text>
                </Pressable>
            </View>
        </ScreenWrapper>
    );
}

export default Index; // Export du composant renommé

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Centre le contenu verticalement
        alignItems: 'center',    // Centre le contenu horizontalement
        paddingHorizontal: wp(5), // Padding horizontal pour un aspect aéré
        gap: hp(3), // Espace entre les éléments
    },
    welcomeMessage: {
        fontSize: hp(3.5),
        fontWeight: theme.fonts.bold,
        color: theme.colors.textPrimary,
        textAlign: 'center',
        marginBottom: hp(1),
    },
    tagline: {
        fontSize: hp(2),
        color: theme.colors.textSecondary,
        textAlign: 'center',
        marginBottom: hp(5), // Plus d'espace avant le bouton
    },
    startButton: {
        width: wp(70), // Taille raisonnable pour un bouton principal
        paddingVertical: hp(2),
        borderRadius: theme.radius.md,
        backgroundColor: theme.colors.primary, // Couleur principale du thème
    },
    startButtonText: {
        color: theme.colors.textOnPrimary, // Texte blanc sur le bouton vert
        fontSize: hp(2.2),
        fontWeight: theme.fonts.semibold,
    },
    loginLink: {
        fontSize: hp(1.8),
        color: theme.colors.accent, // Utilise la couleur d'accent pour le lien
        fontWeight: theme.fonts.semibold,
        textDecorationLine: 'underline',
        marginTop: hp(2), // Espace au-dessus du lien
    },
});









// import { useRouter } from 'expo-router';
// import { Button, Text } from 'react-native';
// import ScreenWrapper from '../components/ScreenWrapper';

// const index = () => {
//     const router = useRouter();
//     return (
//         <ScreenWrapper>
//             <Text>index</Text>
//             <Button title="welcom" onPress={() => router.push('/welcome')} />
//         </ScreenWrapper>
//     )
// }

// export default index