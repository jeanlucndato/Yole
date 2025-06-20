import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import ScreenWrapper from '../components/ScreenWrapper';
import { theme } from '../constants/theme'; // Utilisation de la nouvelle palette de couleurs
import { hp, wp } from '../helpers/common';

const Welcome = () => { // Renommé 'welcome' en 'Welcome' pour la convention React
    const router = useRouter();

    return (
        <ScreenWrapper bg={theme.colors.background}> {/* Utilisation de la couleur de fond du thème */}
            <StatusBar style="dark" />
            <View style={styles.contentContainer}> {/* Renommé 'container' pour mieux refléter son rôle */}
                <Image
                    style={styles.welcomeImage}
                    resizeMode='contain'
                    source={require('../assets/images/welcome.png')} // Assurez-vous que l'image existe
                />

                {/* Le bloc de texte principal */}
                <View style={styles.textBlock}>
                    <Text style={styles.title}>Yole Africa</Text>
                    <Text style={styles.punchline}>
                        Ne restez plus dans l'ignorance. Yole Africa vous connecte directement aux enjeux des droits humains avec des alertes instantanées. Informez-vous, partagez et agissez pour un continent où la justice prévaut.
                    </Text>
                </View>

                {/* Footer et navigation */}
                <View style={styles.bottomSection}>
                    <Button
                        title="Démarrer l'aventure" // Texte plus engageant
                        buttonStyle={styles.welcomeButton} // Style spécifique pour le bouton
                        onPress={() => router.push('login')} // Navigation vers l'écran de connexion
                    />

                    <View style={styles.loginLinkContainer}>
                        <Text style={styles.loginText}>Déjà membre ?{' '}</Text> {/* Ajout d'un espace */}
                        <Pressable onPress={() => router.push('login')}> {/* Le bouton entier doit naviguer vers login */}
                            <Text style={[styles.loginText, styles.loginLink]}>
                                Connectez-vous
                            </Text>
                        </Pressable>
                    </View>

                    {/* Le lien "Mot de passe oublié ?" est généralement sur l'écran de connexion/réinitialisation, pas sur l'écran de bienvenue */}
                    {/* Je le mets en commentaire ici, considérez de le déplacer si ce n'est pas sa place logique */}
                    {/*
                    <Pressable onPress={() => router.push('forgot-password')}> 
                        <Text style={[styles.loginText, styles.forgotPasswordLink]}>
                            Mot de passe oublié ?
                        </Text>
                    </Pressable>
                    */}
                </View>
            </View>
        </ScreenWrapper>
    );
};

export default Welcome; // Export du composant renommé


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        justifyContent: 'space-around', // Distribue l'espace équitablement
        alignItems: 'center', // Centre les éléments horizontalement
        paddingHorizontal: wp(5), // Marge horizontale
        paddingVertical: hp(5), // Ajout d'une marge verticale pour l'espace en haut et en bas
    },
    welcomeImage: {
        width: wp(85), // Image légèrement moins large
        height: hp(35), // Image légèrement plus grande
        alignSelf: 'center', // Assure le centrage de l'image
        marginBottom: hp(2), // Ajoute un peu d'espace sous l'image
    },
    textBlock: {
        gap: 15, // Espacement réduit pour une meilleure cohésion du bloc de texte
        alignItems: 'center', // Centre les textes
        marginBottom: hp(4), // Espace sous le bloc de texte
    },
    title: {
        color: theme.colors.textPrimary, // Utilise la couleur de texte principale du thème
        fontSize: hp(4.5), // Taille de titre un peu plus grande pour l'impact
        textAlign: 'center',
        fontWeight: theme.fonts.bold, // Poids de police gras
    },
    punchline: {
        color: theme.colors.textSecondary, // Utilise une couleur de texte secondaire pour la description
        fontSize: hp(1.8), // Taille légèrement ajustée pour la lisibilité
        textAlign: 'center',
        lineHeight: hp(2.5), // Améliore la lisibilité des longs textes
        paddingHorizontal: wp(2), // Légère marge intérieure pour éviter le texte collé aux bords
    },
    bottomSection: {
        width: '100%', // S'assure que cette section prend toute la largeur
        alignItems: 'center', // Centre les éléments (bouton, liens)
        gap: 20, // Espace entre le bouton et le lien de connexion
        marginTop: hp(2), // Assure un espacement avec les éléments du dessus
    },
    welcomeButton: {
        width: '90%', // Le bouton prend une bonne partie de la largeur
        paddingVertical: hp(2), // Augmente le rembourrage vertical pour un bouton plus grand
        borderRadius: theme.radius.md, // Utilise un rayon du thème pour le bouton
        backgroundColor: theme.colors.primary, // Couleur principale pour le bouton d'action
    },
    loginLinkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', // Centre le texte "Déjà membre ? Connectez-vous"
        marginTop: hp(1), // Espace au-dessus du lien de connexion
    },
    loginText: {
        color: theme.colors.textSecondary, // Couleur pour le texte de base
        fontSize: hp(1.8),
        fontWeight: theme.fonts.regular, // Poids de police régulier
    },
    loginLink: {
        color: theme.colors.primary, // Utilise la couleur primaire pour le lien de connexion
        fontWeight: theme.fonts.semibold, // Poids de police semi-gras pour le lien
        textDecorationLine: 'underline', // Souligne le lien pour le rendre cliquable visuellement
    },
    // Si vous décidez de garder le lien "Mot de passe oublié ?"
    forgotPasswordLink: {
        color: theme.colors.accent, // Une couleur distincte pour ce lien
        fontWeight: theme.fonts.semibold,
        textDecorationLine: 'underline',
        marginTop: hp(1), // Espace pour ce lien s'il est séparé
    },
});



























// i change some things in the welcome page to make it more consistent with the rest of the app and to fix some grammatical errors.




// import { useRouter } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
// import Button from '../components/Button';
// import ScreenWrapper from '../components/ScreenWrapper'; // <-- Correction ici
// import { theme } from '../constants/theme';
// import { hp, wp } from '../helpers/common';

// const welcome = () => {
//     const router = useRouter();
//     return (
//         <ScreenWrapper bg="white">
//             <StatusBar style="dark" />
//             <View style={styles.container} >
//                 <Image style={styles.welcomeImage} resizeMode='contain' source={require('../assets/images/welcome.png')} />
//             </View>

//             {/* le text du font premiere page */}
//             <View style={{ gap: 20 }}>
//                 <Text style={styles.title}>Yole Africa</Text>
//                 <Text style={styles.punchline}>Ne restez plus dans l'ignorance. Yole Africa vous connecte directement aux enjeux des droits humains avec des alertes instantanées. Informez-vous, partagez et agissez pour un continent où la justice prévaut</Text>

//             </View>
//             {/* footer */}
//             <View style={styles.footer}>
//                 <Button
//                     title="Bienvenue"
//                     buttonStyle={{ marginHorizontal: wp(3) }} onPress={() => router.push('login')}
//                 />
//             </View>
//             <View style={styles.bottomContainer}>
//                 <Text style={styles.loginText}>Déjà membre ? <Text style={{ color: theme.colors.primary }}>Connectez-vous</Text></Text>
//                 <Pressable onPress={() => router.push('signUp')}>
//                     <Text style={[styles.loginText, { colors: theme.colors.primaryDark, fontWeight: theme.semibold }]}>Mot de passe oublié ?</Text>
//                 </Pressable>

//             </View>

//         </ScreenWrapper >
//     )
// }

// export default welcome


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'space-around',
//         paddingHorizontal: wp(4),
//     },
//     welcomeImage: {
//         width: wp(100),
//         height: hp(30),
//         alignSelf: 'center',
//     },
//     title: {
//         color: theme.colors.text,
//         fontSize: hp(4),
//         textAlign: 'center',
//         fontWeight: theme.fonts.extraBold
//     },
//     punchline: {
//         color: theme.colors.text,
//         fontSize: hp(1.7),
//         textAlign: 'center',
//         marginTop: hp(2),
//     },
//     footer: {
//         gap: 30,
//         width: '100%',
//     },
//     bottomTextContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         gap: 5,
//     },
//     loginText: {
//         color: theme.colors.text,
//         fontSize: hp(1.8),
//         textAlign: 'center',
//         marginTop: hp(2),
//     },

// });