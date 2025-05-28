import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ScreenWrapper = ({ children, bg }) => { // <-- Correction ici
    const { top } = useSafeAreaInsets();
    const paddingTop = top > 0 ? top + 5 : 30;

    return (
        <View style={{ flex: 1, paddingTop, backgroundColor: bg || '#fff' }}>
            {
                children
            }
        </View>
    )
}

export default ScreenWrapper