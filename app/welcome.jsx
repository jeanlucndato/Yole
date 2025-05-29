import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import ScreenWrapper from '../components/ScreenWrapper'; // <-- Correction ici
import { theme } from '../constants/theme';
import { hp, wp } from '../helpers/common';

const welcome = () => {
    return (
        <ScreenWrapper bg="white">
            <StatusBar style="dark" />
            <View style={styles.container} >
                <Image style={styles.welcomeImage} resizeMode='contain' source={require('../assets/images/welcome.png')} />
            </View>

            {/* le text du font premiere page */}
            <View style={{ gap: 20 }}>
                <Text style={styles.title}>Yole Africa</Text>
                <Text style={styles.punchline}>Ne restez plus dans l'ignorance. Yole Africa vous connecte directement aux enjeux des droits humains avec des alertes instantanées. Informez-vous, partagez et agissez pour un continent où la justice prévaut</Text>

            </View>
            {/* footer */}
            <View style={styles.footer}>
                <Button
                    title="Bienvenue"
                    buttonStyle={{ marginHorizontal: wp(3) }} onPress={() => { }}
                />
            </View>

        </ScreenWrapper>
    )
}

export default welcome


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'space-around',
        paddingHorizontal: wp(4),
    },
    welcomeImage: {
        width: wp(100),
        height: hp(30),
        alignSelf: 'center',
    },
    title: {
        color: theme.colors.text,
        fontSize: hp(4),
        textAlign: 'center',
        fontWeight: theme.fonts.extraBold
    },
    punchline: {
        color: theme.colors.text,
        fontSize: hp(1.7),
        textAlign: 'center',
        marginTop: hp(2),
    },

});