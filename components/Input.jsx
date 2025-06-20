import { StyleSheet, TextInput, View } from 'react-native'
import { theme } from '../constants/theme'

const Input = (props) => {
    return (
        <View style={[styles.container, props.containerstyles]}>
            {
                props.icon && props.icon
            }
            <TextInput
                style={{ flex: 1 }}
                placeholderTextColor={theme.colors.textLight}
                ref={props.inputRef && props.inputRef}
                {...props}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        paddingHorizontal: 18,
        borderCurve: 'continuous',
        borderRadius: theme.radius.xxl,
        borderWidth: 0.4,
        borderColor: theme.colors.text,
    }
})