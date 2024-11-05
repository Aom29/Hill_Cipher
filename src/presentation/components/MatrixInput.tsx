import { View, Text, TextInput } from 'react-native';
import { styles } from "../../config/theme/app-theme";

interface MatrixInputProps {
  label: string;
  matrix: string[];
  onChange: (text: string, index: number, isKeyMatrix: boolean) => void;
  isKeyMatrix: boolean;
  rows: number;
  cols: number;
}

const MatrixInput: React.FC<MatrixInputProps> = ({ label, matrix, onChange, isKeyMatrix, rows, cols }) => {
  return (
    <View>
      <Text style={styles.keyText}>{label}</Text>
      <View style={styles.matrixContainer}>
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <View key={rowIndex} style={styles.matrixRow}>
            {Array.from({ length: cols }).map((_, colIndex) => {
              const index = rowIndex * cols + colIndex;
              return (
                <TextInput
                  key={index}
                  style={styles.input}
                  keyboardType="numeric"
                  value={matrix[index]}
                  onChangeText={(text) => onChange(text, index, isKeyMatrix)}
                />
              );
            })}
          </View>
        ))}
      </View>
    </View>
  );
};

export default MatrixInput;
