import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CalculatorScreen } from './src/presentation/screens/CalculatorScreen';
import { styles } from './src/config/theme/app-theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
export default function App() {
  return (
    <SafeAreaProvider>
      <View style={ styles.background }>
        <StatusBar style="light"/>
        <CalculatorScreen/>
      </View>
    </SafeAreaProvider>
  );
}


