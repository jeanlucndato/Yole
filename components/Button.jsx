import { Pressable, StyleSheet, Text } from 'react-native'
import { theme } from '../constants/theme'
import { hp } from '../helpers/common'

const Button = ({
    buttonStyle,
    textStyle,
    title = '',
    onPress = () => { },
    hasShadow = true,
    disabled = false,
}) => {

    const shadowStyle = {

    }
    return (
        <Pressable onPress={onPress} style={[styles.button, buttonStyle, hasShadow && shadowStyle]} >
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </Pressable >
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        height: hp(6.6),
        justifyContent: 'center',
        alignItems: 'center',
        borderCurve: 'continuous',
        borderRadius: theme.radius.xl,

    },
    text: {
        color: 'white',
        fontSize: hp(2.5),
        fontWeight: theme.fonts.bold,
    },

})