import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import styles from './styles'
import HomeBackground from './components/HomeBackground/HomeBackground'

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <HomeBackground navigation={navigation} />
        </View>
    );
}