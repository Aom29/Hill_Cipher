import { View, Text, TextInput } from 'react-native';
import { styles } from "../../config/theme/app-theme";

interface MatrixInputProps {
  label: string;
  matrix: string[];
  onChange: (text: string, index: number, isKeyMatrix: boolean) => void;
  isKeyMatrix: boolean;
}

const MatrixInput: React.FC<MatrixInputProps> = ({ label, matrix, onChange, isKeyMatrix }) => (
  <View>
    <Text style={styles.keyText}>{label}</Text>
    <View style={styles.matrixContainer}>
      {matrix.map((value, index) => (
        <TextInput
          key={index}
          style={styles.input}
          keyboardType="numeric"
          value={value}
          onChangeText={(text) => onChange(text, index, isKeyMatrix)}
        />
      ))}
    </View>
  </View>
);

export default MatrixInput;
