import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

// Importez vos composants personnalisés et votre thème
import Icon from '../assets/icons'; // Votre composant Icon
import BackButton from '../components/BackButton';
import Button from '../components/Button'; // Votre composant Button
import Input from '../components/Input'; // Votre composant Input
import ScreenWrapper from '../components/ScreenWrapper';
import { theme } from '../constants/theme'; // Votre nouveau thème
import { hp, wp } from '../helpers/common'; // Fonctions utilitaires pour le dimensionnement

const Login = () => {
    const router = useRouter();

    // Utilisation de useRef pour stocker les valeurs des champs de texte.
    // Cela évite les re-rendus inutiles du composant parent lors de la saisie.
    // Si vous aviez besoin d'un contrôle plus fin du state (ex: effacer le texte après soumission),
    // useState serait plus approprié.
    const emailRef = useRef("");
    const passwordRef = useRef("");

    // État de chargement pour le bouton de connexion, initialisé à 'false'.
    const [loading, setLoading] = useState(false);

    // Fonction appelée lors de la soumission du formulaire
    const onSubmit = () => {
        // Active l'état de chargement du bouton
        setLoading(true);

        // Vérification que les champs ne sont pas vides
        if (!emailRef.current || !passwordRef.current) {
            // Affiche une alerte si des champs sont manquants
            alert("Veuillez remplir tous les champs.");
            // Désactive le chargement immédiatement car la validation a échoué localement
            setLoading(false);
            return; // Arrête l'exécution de la fonction
        }

        // Simule un appel API de connexion asynchrone
        console.log("Tentative de connexion avec :", { email: emailRef.current, password: passwordRef.current });

        setTimeout(() => {
            // Désactive l'état de chargement après la simulation
            setLoading(false);
            // Affiche un message de succès (à remplacer par une navigation réelle ou une gestion d'état)
            alert("Connexion réussie (simulation) !");

            // Exemple de navigation après une connexion réussie
            // 'replace' est utilisé pour empêcher l'utilisateur de revenir à l'écran de connexion via le bouton retour du téléphone.
            // Remplacez '(app)' par le nom de votre route principale dans expo-router
            // router.replace('(app)'); 
        }, 2000); // Délai de 2 secondes pour simuler un chargement
    };

    return (
        // Utilise la couleur de fond de votre nouveau thème pour une apparence cohérente
        <ScreenWrapper bg={theme.colors.background}>
            {/* Barre d'état (en haut de l'écran) */}
            <StatusBar style="dark" />

            {/* Conteneur principal de l'écran */}
            <View style={styles.headerContainer}>
                {/* Bouton de retour */}
                {/* Assurez-vous que le composant BackButton gère correctement la navigation */}
                <BackButton router={router} />

                {/* Bloc de texte de bienvenue */}
                <View style={styles.welcomeTextBlock}>
                    <Text style={styles.welcomeText}>Karibu</Text>
                    <Text style={styles.welcomeText}>Bienvenue</Text>
                </View>
            </View>

            {/* Formulaire de connexion */}
            <View style={styles.form}>
                <Text style={styles.formInstructionText}>
                    Veuillez vous connecter pour continuer.
                </Text>

                {/* Champ de saisie pour l'email */}
                <Input
                    icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
                    placeholder="Entrez votre email" // Correction grammaticale
                    onChangeText={(value) => emailRef.current = value}
                    keyboardType="email-address" // Optimise le clavier mobile pour l'email
                />

                {/* Champ de saisie pour le mot de passe */}
                <Input
                    icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
                    placeholder="Entrez votre mot de passe" // Correction grammaticale
                    secureTextEntry // Cache le texte du mot de passe
                    onChangeText={(value) => passwordRef.current = value}
                />

                {/* Lien "Mot de passe oublié ?" */}
                {/* Il est préférable d'avoir une Pressable autour du texte pour une meilleure zone de clic */}
                <Pressable onPress={() => { /* router.push('forgot-password'); */ }}>
                    <Text style={styles.forgotPasswordLink}>
                        Mot de passe oublié ?
                    </Text>
                </Pressable>

                {/* Bouton de soumission */}
                <Button
                    title={"Se connecter"}
                    loading={loading}
                    onPress={onSubmit}
                    buttonStyle={styles.loginButton} // Style spécifique pour le bouton de connexion
                />
            </View>

            {/* Section du pied de page pour le lien d'inscription */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Je n'ai pas de compte ?
                </Text>
                {/* Lien vers l'écran d'inscription */}
                <Pressable onPress={() => router.push('SignUp')}> {/* Assurez-vous que 'SignUp' est la route correcte */}
                    <Text style={[styles.footerText, styles.signupLinkText]}>
                        S'inscrire
                    </Text>
                </Pressable>
            </View>
        </ScreenWrapper>
    );
};

export default Login;

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1, // Permet au contenu de prendre de la place et de pousser le formulaire vers le bas
        gap: 45, // Espacement entre le bouton retour et le bloc de bienvenue
        paddingHorizontal: wp(5),
        paddingTop: hp(2), // Petit padding en haut pour la barre d'état
    },
    welcomeTextBlock: {
        // styles spécifiques pour le bloc de bienvenue si nécessaire
    },
    welcomeText: {
        fontSize: hp(4),
        fontWeight: theme.fonts.bold, // Utilise le poids de police du thème
        color: theme.colors.textPrimary, // Utilise la couleur de texte principale du thème
        marginBottom: 5, // Petit espace entre les deux lignes de texte de bienvenue
    },
    form: {
        gap: 25, // Espacement entre les champs de saisie et le bouton
        paddingHorizontal: wp(5), // Assure une cohérence avec le padding du conteneur principal
        marginBottom: hp(3), // Espace sous le formulaire avant le pied de page
    },
    formInstructionText: {
        fontSize: hp(1.7),
        color: theme.colors.textSecondary, // Utilise la couleur de texte secondaire du thème
        textAlign: 'center',
        marginBottom: hp(1), // Espace entre l'instruction et le premier champ
    },
    forgotPasswordLink: {
        textAlign: 'right',
        fontWeight: theme.fonts.semibold, // Poids de police du thème
        color: theme.colors.accent, // Utilise la couleur d'accent pour le lien "Mot de passe oublié"
        marginTop: -hp(1), // Ajustement de la marge pour rapprocher du champ de mot de passe
        marginBottom: hp(2), // Espace avant le bouton de connexion
    },
    loginButton: {
        width: '100%', // Le bouton prend toute la largeur disponible
        paddingVertical: hp(2), // Augmente le rembourrage vertical pour un bouton plus grand
        borderRadius: theme.radius.md, // Utilise un rayon du thème
        backgroundColor: theme.colors.primary, // Couleur principale du thème pour le bouton d'action
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        marginTop: hp(2), // Espace au-dessus du pied de page
        marginBottom: hp(4), // Espace en bas de l'écran pour le pied de page
    },
    footerText: {
        color: theme.colors.textSecondary, // Couleur de texte secondaire du thème
        fontSize: hp(1.7),
        textAlign: 'center',
    },
    signupLinkText: {
        color: theme.colors.primary, // Utilise la couleur principale du thème pour le lien d'inscription
        fontWeight: theme.fonts.semibold, // Poids de police du thème
        textDecorationLine: 'underline', // Souligne le texte pour indiquer que c'est un lien cliquable
    },
});






























// import { useRouter } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import { useRef, useState } from 'react'; // 'useState' est maintenant importé !
// import { Pressable, StyleSheet, Text, View } from 'react-native'; // 'Pressable' est importé ici
// import Icon from '../assets/icons'; // Votre composant Icon personnalisé
// import BackButton from '../components/BackButton';
// import Button from '../components/Button'; // Assurez-vous d'avoir ce composant Button personnalisé
// import Input from '../components/Input'; // Votre composant Input personnalisé
// import ScreenWrapper from '../components/ScreenWrapper';
// import { theme } from '../constants/theme';
// import { hp, wp } from '../helpers/common';

// const Login = () => {
//     const router = useRouter();
//     // Utiliser useRef pour stocker les valeurs des champs n'entraîne pas de re-rendu
//     // Si vous voulez que les champs de texte réagissent aux mises à jour (ex: effacer le texte),
//     // il est souvent préférable d'utiliser useState pour les valeurs des champs.
//     const emailRef = useRef("");
//     const passwordRef = useRef("");

//     // Initialisez 'loading' à false car l'écran n'est pas en cours de chargement au démarrage
//     const [loading, setLoading] = useState(false);

//     const onSubmit = () => {
//         // Active le chargement
//         setLoading(true);

//         // Vérification basique des champs
//         if (!emailRef.current || !passwordRef.current) {
//             alert("Veuillez remplir tous les champs."); // Correction de la ponctuation
//             setLoading(false); // Arrête le chargement si les champs ne sont pas remplis
//             return;
//         }

//         // Simule un processus de connexion asynchrone (remplacez par votre logique d'API réelle)
//         console.log("Tentative de connexion avec:", { email: emailRef.current, password: passwordRef.current });

//         setTimeout(() => {
//             setLoading(false); // Désactive le chargement après un délai
//             alert("Connexion réussie (simulation) !");
//             // Ici, vous navigueriez vers l'écran principal de l'application
//             // router.replace('(app)'); // Exemple de navigation avec expo-router
//         }, 2000); // Délai de 2 secondes
//     };

//     return (
//         <ScreenWrapper bg={"white"}>
//             <StatusBar style="dark" />
//             <View style={styles.container}>
//                 <BackButton router={router} />
//                 {/* Le texte de Bienvenue */}
//                 <View>
//                     <Text style={styles.welcomeText}>Karibu</Text>
//                     <Text style={styles.welcomeText}>Bienvenue</Text>
//                 </View>
//             </View>

//             {/* Le formulaire de connexion */}
//             <View style={styles.form}>
//                 <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
//                     Veuillez vous connecter pour continuer.
//                 </Text>
//                 <Input
//                     icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
//                     placeholder="Entrez votre email" // Correction grammaticale
//                     onChangeText={(value) => emailRef.current = value}
//                     keyboardType="email-address" // Clavier optimisé pour l'email
//                 />
//                 <Input
//                     icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
//                     placeholder="Entrez votre mot de passe" // Correction grammaticale
//                     secureTextEntry // Masque le texte du mot de passe
//                     onChangeText={(value) => passwordRef.current = value}
//                 />
//                 <Text style={styles.forgotPassword}>
//                     Mot de passe oublié ? {/* Correction grammaticale et ponctuation */}
//                 </Text>

//                 {/* Bouton de connexion */}
//                 {/* Assurez-vous que votre composant Button gère bien les props 'title', 'loading' et 'onPress' */}
//                 <Button title={"Se connecter"} loading={loading} onPress={onSubmit} />
//             </View>

//             {/* Pied de page avec lien d'inscription */}
//             <View style={styles.footer}>
//                 <Text style={styles.footerText}>
//                     Je n'ai pas de compte ? {/* Correction grammaticale et ponctuation */}
//                 </Text>
//                 {/* Naviguer vers l'écran d'inscription */}
//                 <Pressable onPress={() => router.push('SignUp')}>
//                     <Text style={[styles.footerText, { color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold }]}>
//                         S'inscrire
//                     </Text>
//                 </Pressable>
//             </View>
//         </ScreenWrapper>
//     );
// };

// export default Login;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         gap: 45, // Espace entre les éléments enfants
//         paddingHorizontal: wp(5),
//     },
//     welcomeText: {
//         fontSize: hp(4),
//         fontWeight: theme.fonts.bold,
//         color: theme.colors.text,
//         marginBottom: 20,
//     },
//     form: {
//         gap: 25, // Espace entre les éléments du formulaire
//     },
//     forgotPassword: {
//         textAlign: 'right',
//         fontWeight: theme.fonts.semibold,
//         color: theme.colors.text,
//         // Vous pouvez ajuster le marginTop/marginBottom ici si besoin pour l'espacement
//     },
//     footer: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         gap: 5,
//         marginTop: hp(3), // Ajout d'un espace au-dessus du pied de page
//     },
//     footerText: {
//         color: theme.colors.text,
//         fontSize: hp(1.6),
//         textAlign: 'center',
//     },
// });