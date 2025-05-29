import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
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
                <Text style={styles.punchline}>Bienvenue dans l'application</Text>

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
        fontWeight: theme.fonts.extraBold,
    },

});