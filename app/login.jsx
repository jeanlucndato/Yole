import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react'; // 'useState' est maintenant importé !
import { Pressable, StyleSheet, Text, View } from 'react-native'; // 'Pressable' est importé ici
import Icon from '../assets/icons'; // Votre composant Icon personnalisé
import BackButton from '../components/BackButton';
import Button from '../components/Button'; // Assurez-vous d'avoir ce composant Button personnalisé
import Input from '../components/Input'; // Votre composant Input personnalisé
import ScreenWrapper from '../components/ScreenWrapper';
import { theme } from '../constants/theme';
import { hp, wp } from '../helpers/common';

const Login = () => {
    const router = useRouter();
    // Utiliser useRef pour stocker les valeurs des champs n'entraîne pas de re-rendu
    // Si vous voulez que les champs de texte réagissent aux mises à jour (ex: effacer le texte),
    // il est souvent préférable d'utiliser useState pour les valeurs des champs.
    const emailRef = useRef("");
    const passwordRef = useRef("");

    // Initialisez 'loading' à false car l'écran n'est pas en cours de chargement au démarrage
    const [loading, setLoading] = useState(false);

    const onSubmit = () => {
        // Active le chargement
        setLoading(true);

        // Vérification basique des champs
        if (!emailRef.current || !passwordRef.current) {
            alert("Veuillez remplir tous les champs."); // Correction de la ponctuation
            setLoading(false); // Arrête le chargement si les champs ne sont pas remplis
            return;
        }

        // Simule un processus de connexion asynchrone (remplacez par votre logique d'API réelle)
        console.log("Tentative de connexion avec:", { email: emailRef.current, password: passwordRef.current });

        setTimeout(() => {
            setLoading(false); // Désactive le chargement après un délai
            alert("Connexion réussie (simulation) !");
            // Ici, vous navigueriez vers l'écran principal de l'application
            // router.replace('(app)'); // Exemple de navigation avec expo-router
        }, 2000); // Délai de 2 secondes
    };

    return (
        <ScreenWrapper bg={"white"}>
            <StatusBar style="dark" />
            <View style={styles.container}>
                <BackButton router={router} />
                {/* Le texte de Bienvenue */}
                <View>
                    <Text style={styles.welcomeText}>Karibu</Text>
                    <Text style={styles.welcomeText}>Bienvenue</Text>
                </View>
            </View>

            {/* Le formulaire de connexion */}
            <View style={styles.form}>
                <Text style={{ fontSize: hp(1.5), color: theme.colors.text }}>
                    Veuillez vous connecter pour continuer.
                </Text>
                <Input
                    icon={<Icon name="mail" size={26} strokeWidth={1.6} />}
                    placeholder="Entrez votre email" // Correction grammaticale
                    onChangeText={(value) => emailRef.current = value}
                    keyboardType="email-address" // Clavier optimisé pour l'email
                />
                <Input
                    icon={<Icon name="lock" size={26} strokeWidth={1.6} />}
                    placeholder="Entrez votre mot de passe" // Correction grammaticale
                    secureTextEntry // Masque le texte du mot de passe
                    onChangeText={(value) => passwordRef.current = value}
                />
                <Text style={styles.forgotPassword}>
                    Mot de passe oublié ? {/* Correction grammaticale et ponctuation */}
                </Text>

                {/* Bouton de connexion */}
                {/* Assurez-vous que votre composant Button gère bien les props 'title', 'loading' et 'onPress' */}
                <Button title={"Se connecter"} loading={loading} onPress={onSubmit} />
            </View>

            {/* Pied de page avec lien d'inscription */}
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    Je n'ai pas de compte ? {/* Correction grammaticale et ponctuation */}
                </Text>
                {/* Naviguer vers l'écran d'inscription */}
                <Pressable onPress={() => router.push('SignUp')}>
                    <Text style={[styles.footerText, { color: theme.colors.primaryDark, fontWeight: theme.fonts.semibold }]}>
                        S'inscrire
                    </Text>
                </Pressable>
            </View>
        </ScreenWrapper>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 45, // Espace entre les éléments enfants
        paddingHorizontal: wp(5),
    },
    welcomeText: {
        fontSize: hp(4),
        fontWeight: theme.fonts.bold,
        color: theme.colors.text,
        marginBottom: 20,
    },
    form: {
        gap: 25, // Espace entre les éléments du formulaire
    },
    forgotPassword: {
        textAlign: 'right',
        fontWeight: theme.fonts.semibold,
        color: theme.colors.text,
        // Vous pouvez ajuster le marginTop/marginBottom ici si besoin pour l'espacement
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        marginTop: hp(3), // Ajout d'un espace au-dessus du pied de page
    },
    footerText: {
        color: theme.colors.text,
        fontSize: hp(1.6),
        textAlign: 'center',
    },
});