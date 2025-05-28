import { useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

const index = () => {
    const router = useRouter();
    return (
        <View>
            <Text>index</Text>
            <Button title="welcom" onPress={() => router.push('/welcome')} />
        </View>
    )
}

export default index