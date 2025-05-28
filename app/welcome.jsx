import { StyleSheet, Text } from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper'; // <-- Correction ici

const welcome = () => {
    return (
        <ScreenWrapper>
            <Text>welcome</Text>
        </ScreenWrapper>
    )
}

export default welcome

const styles = StyleSheet.create({})