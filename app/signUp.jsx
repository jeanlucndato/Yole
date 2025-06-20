import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native'; // 'Pressable' est importé
import Icon from '../assets/icons'; // Votre composant Icon personnalisé
import BackButton from '../components/BackButton';
import Button from '../components/Button'; // Assurez-vous d'avoir ce composant Button personnalisé
import Input from '../components/Input'; // Votre composant Input personnalisé
import ScreenWrapper from '../components/ScreenWrapper';
import { theme } from '../constants/theme'; // Utilisation de la nouvelle palette de couleurs
import { hp, wp } from '../helpers/common';

const SignUp = () => {
    const router = useRouter();

    // Utilisation de useRef pour les champs de formulaire (sans re-rendu)
    const nameRef = useRef("");
    const emailRef = useRef("");
    const passwordRef = useRef("");

    // État de chargement pour le bouton d'inscription
    const [loading, setLoading] = useState(false);

    const onSubmit = () => {
        setLoading(true); // Active le chargement au début de la soumission

        // Vérification que tous les champs sont remplis
        if (!nameRef.current || !emailRef.current || !passwordRef.current) {
            alert("Veuillez remplir tous les champs pour vous inscrire."); // Message plus clair
            setLoading(false); // Désactive le chargement si des champs sont manquants
            return;
        }

        // Simule un processus d'inscription asynchrone (remplacez par votre logique d'API réelle)
        console.log("Tentative d'inscription avec:", {
            name: nameRef.current,
            email: emailRef.current,
            password: passwordRef.current,
        });

        setTimeout(() => {
            setLoading(false); // Désactive le chargement après un délai
            alert("Inscription réussie (simulation) !");
            // Après une inscription réussie, vous pourriez vouloir naviguer vers l'écran de connexion
            router.replace('login'); // Utiliser 'replace' pour éviter de revenir à l'inscription via le bouton retour
        }, 2000); // Délai de 2 secondes
    };

    return (
        <ScreenWrapper bg={theme.colors.background}> {/* Utilisation de la couleur de fond du thème */}
            <StatusBar style="dark" />
            <View style={styles.headerContainer}> {/* Conteneur pour le bouton retour et le texte de bienvenue */}
                <BackButton router={router} />
                <View>
                    <Text style={styles.welcomeText}>Commencez </Text> {/* Correction grammaticale */}
                    <Text style={styles.welcomeText}>Par Ici !</Text> {/* Correction grammaticale et ponctuation */}
                </View>
            </View>

            {/* Le formulaire d'inscription */}
            <View style={styles.form}>
                <Text style={styles.formInstructionText}> {/* Style dédié pour le texte d'instruction */}
                    Pour créer un compte, veuillez remplir les champs.
                </Text>

                <Input
                    icon={<Icon name="user" size={26} strokeWidth={1.6} />}
                    placeholder="Entrez votre nom complet" // Texte plus explicite
                    onChangeText={(value) => nameRef.current = value}
                />
                <Input
                    icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
                    placeholder="Entrez votre adresse email" // Texte plus explicite
                    onChangeText={(value) => emailRef.current = value}
                    keyboardType="email-address" // Clavier optimisé pour l'email
                />
                <Input
                    icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
                    placeholder="Créez votre mot de passe" // Texte plus explicite
                    secureTextEntry // Masque le texte du mot de passe
                    onChangeText={(value) => passwordRef.current = value}
                />
                {/* Le lien "Mot de passe oublié ?" n'a pas sa place sur un écran d'inscription. */}
                {/* Il est mieux placé sur l'écran de connexion ou de réinitialisation de mot de passe. */}
                {/* J'ai commenté cette section. */}
                {/*
                <Text style={styles.forgotPassword}>
                    Mot de passe oublié ?
                </Text>
                */}

                {/* Bouton d'inscription */}
                <Button title={"S'inscrire"} loading={loading} onPress={onSubmit} />
            </View>

            {/* Pied de page avec lien vers la connexion */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    J'ai déjà un compte ? {/* Correction grammaticale et ponctuation */}
                </Text>
                {/* Naviguer vers l'écran de connexion */}
                <Pressable onPress={() => router.push('login')}>
                    <Text style={[styles.footerText, styles.loginLinkText]}>
                        Me connecter
                    </Text>
                </Pressable>
            </View>
        </ScreenWrapper>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1, // Prend de l'espace pour pousser le contenu vers le bas
        gap: 45, // Espacement entre le bouton retour et le texte de bienvenue
        paddingHorizontal: wp(5),
        paddingTop: hp(2), // Ajout d'un peu de padding en haut
    },
    welcomeText: {
        fontSize: hp(4),
        fontWeight: theme.fonts.bold,
        color: theme.colors.textPrimary, // Utilisation de la couleur de texte du thème
        marginBottom: 5, // Espace léger entre les deux lignes du titre
    },
    form: {
        gap: 25, // Espace entre les éléments du formulaire (texte, inputs, bouton)
        paddingHorizontal: wp(5), // Assure la même marge horizontale que le header
        marginBottom: hp(3), // Espace sous le formulaire
    },
    formInstructionText: {
        fontSize: hp(1.7), // Taille légèrement plus grande
        color: theme.colors.textSecondary, // Couleur de texte secondaire
        textAlign: 'center', // Centrage du texte d'instruction
        marginBottom: hp(1), // Espace sous l'instruction
    },
    // Le style forgotPassword n'est plus pertinent ici si le lien est déplacé
    // forgotPassword: {
    //     textAlign: 'right',
    //     fontWeight: theme.fonts.semibold,
    //     color: theme.colors.text,
    // },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        marginTop: hp(2), // Un peu moins de marge que sur Login si l'espace est plus restreint
        marginBottom: hp(4), // Assure que le pied de page n'est pas collé au bas de l'écran
    },
    footerText: {
        color: theme.colors.textSecondary, // Couleur de texte secondaire pour la cohérence
        fontSize: hp(1.7), // Taille de texte cohérente
        textAlign: 'center',
    },
    loginLinkText: {
        color: theme.colors.primary, // Utilisation de la couleur primaire pour le lien
        fontWeight: theme.fonts.semibold, // Poids de police semi-gras pour le lien
        textDecorationLine: 'underline', // Souligne le lien pour une meilleure affordance
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

// const SignUp = () => {
//     const router = useRouter();

//     const emailRef = useRef("");
//     const nameRef = useRef("");
//     const passwordRef = useRef("");

//     // Initialisez 'loading' à false car l'écran n'est pas en cours de chargement au démarrage
//     const [loading, setLoading] = useState(false);

//     const onSubmit = () => {
//         // Active le chargement
//         setLoading(true);

//         // Vérification basique des champs
//         if (!emailRef.current || !passwordRef.current) {
//             alert("Pour vous enregistre, Veuillez remplir tous les champs."); // Correction de la ponctuation
//             setLoading(false); // Arrête le chargement si les champs ne sont pas remplis
//             return;
//         }

//         // Simule un processus de connexion asynchrone (remplacez par votre logique d'API réelle)
//         console.log("Tentative de connexion avec:", { email: emailRef.current, password: passwordRef.current });

//         setTimeout(() => {
//             setLoading(false); // Désactive le chargement après un délai
//             alert("Connexion réussie (simulation) !");

//         }, 2000); // Délai de 2 secondes
//     };

//     return (
//         <ScreenWrapper bg={"white"}>
//             <StatusBar style="dark" />
//             <View style={styles.container}>
//                 <BackButton router={router} />
//                 {/* Le texte de Bienvenue */}
//                 <View>
//                     <Text style={styles.welcomeText}>Commencer </Text>
//                     <Text style={styles.welcomeText}>Par Içi!!!</Text>
//                 </View>
//             </View>

//             {/* Le formulaire de connexion */}
//             <View style={styles.form}>
//                 <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
//                     Pour ouvrire un Comptez, Veuilez Remplire les champs.
//                 </Text>
//                 <Input
//                     icon={<Icon name="user" size={26} strokeWidth={1.6} />}
//                     placeholder="Entrez votre Nom" // Correction grammaticale
//                     onChangeText={(value) => nameRef.current = value}

//                 />
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

//                 {/* Bouton d'inscription */}
//                 {/* Assurez-vous que votre composant Button gère bien les props 'title', 'loading' et 'onPress' */}
//                 <Button title={"S'enregistre"} loading={loading} onPress={onSubmit} />
//             </View>

//             {/* Pied de page avec lien d'inscription */}
//             <View style={styles.footer}>
//                 <Text style={styles.footerText}>
//                     J'ai déjà un compte ? {/* Correction grammaticale et ponctuation */}
//                 </Text>
//                 {/* Naviguer vers l'écran d'inscription */}
//                 <Pressable onPress={() => router.push('login')}>
//                     <Text style={[styles.footerText, { color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold }]}>
//                         Se connecter
//                     </Text>
//                 </Pressable>
//             </View>
//         </ScreenWrapper>
//     );
// };

// export default SignUp;

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