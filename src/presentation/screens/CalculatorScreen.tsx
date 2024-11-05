import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from "react-native"; 
import { colors, styles } from "../../config/theme/app-theme";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import MatrixInput from "../components/MatrixInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { hillCipher } from "../helpers/HillCipher";
import { inverseMatrix } from "../helpers/InverseMatrix";

export const CalculatorScreen: React.FC = () => {
  const [matrix, setMatrix] = useState<string[]>([]);
  const [keyMatrix, setKeyMatrix] = useState<string[]>(Array(9).fill(''));
  const [alphabetSize, setAlphabetSize] = useState<number>();
  const [blockSize, setBlockSize] = useState<number>();

  useEffect(() => {
    if (blockSize && blockSize >= 1) {
      setMatrix(Array(blockSize * 3).fill(''));
    }
  }, [blockSize]);

  const handleInputChange = (value: string, index: number, isKeyMatrix: boolean) => {
    if (isKeyMatrix) {
      const updatedKeyMatrix = [...keyMatrix];
      updatedKeyMatrix[index] = value;
      setKeyMatrix(updatedKeyMatrix);
    } else {
      const updatedMatrix = [...matrix];
      updatedMatrix[index] = value;
      setMatrix(updatedMatrix);
    }
  };

  const handleAlphabetSizeChange = (value: string) => {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      setAlphabetSize(parsedValue);
    } else {
      setAlphabetSize(undefined);
    }
  };

  const handleBlockSizeChange = (value: string) => {
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue) && parsedValue >= 1) {
      setBlockSize(parsedValue);
    } else {
      setBlockSize(undefined);
    }
  };

  const checkMatrixFilled = () => {
    return matrix.every(value => value !== '') && keyMatrix.every(value => value !== '');
  };

  const checkInputN = () => {
    return Number.isInteger(alphabetSize) && alphabetSize !== undefined;
  };

  const checkBlockSize = () => {
    return Number.isInteger(blockSize) && blockSize !== undefined && blockSize >= 1;
  };

  const handleCipher = () => {
    if (checkMatrixFilled() && checkInputN() && checkBlockSize()) {
      const intMatrix = matrix.map(value => parseInt(value, 10));
      const intKey = keyMatrix.map(value => parseInt(value, 10));

      const formattedMessageMatrix = [];
      if(blockSize === 1){
        formattedMessageMatrix.push(intMatrix);
      }
      else{
        for (let i = 0; i < blockSize!; i++) {
          formattedMessageMatrix.push(intMatrix.slice(i * 3, (i + 1) * 3));
        }
      }

      const formattedKeyMatrix = [
        intKey.slice(0, 3),
        intKey.slice(3, 6),
        intKey.slice(6, 9)
      ];

      const result: number[][] = hillCipher({
        message: formattedMessageMatrix,
        keyMatrix: formattedKeyMatrix,
        n: alphabetSize!
      });
      
      const formattedResult = result.map(row => row.join(', ')).join('\n');
      Alert.alert("Resultado del cifrado", `El mensaje cifrado es:\n${formattedResult}`);
    } else {
      Alert.alert("Error", "Por favor, llena correctamente los campos y asegúrate de que N y el Número de bloques sean válidos");
    }
  };

  // Nueva función para manejar el cálculo de la inversa de la matriz clave
  const handleInverse = () => {
    if (checkMatrixFilled() && checkInputN()) {
      const intKey = keyMatrix.map(value => parseInt(value, 10));
      const formattedKeyMatrix = [
        intKey.slice(0, 3),
        intKey.slice(3, 6),
        intKey.slice(6, 9)
      ];

      // Llama a la función inverseMatrix
      const inverseResult: number[][] = inverseMatrix({
        matrix: formattedKeyMatrix,
        n: alphabetSize!
      });

      const formattedInverse = inverseResult.map(row => row.join(', ')).join('\n');
      Alert.alert("Matriz Inversa", `La matriz inversa es:\n${formattedInverse}`);
    } else {
      Alert.alert("Error", "Por favor, llena correctamente los campos y asegúrate de que N sea válido");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <Header title="Hill Cipher" />

        <TextInput 
          style={[styles.input, { marginBottom: 20, width: '60%' }]}
          placeholder="Número de bloques"
          placeholderTextColor={colors.lightGray}
          keyboardType="numeric"
          onChangeText={handleBlockSizeChange}
          value={blockSize !== undefined ? blockSize.toString() : ''}
        />

        <MatrixInput
          label="Message"
          matrix={matrix}
          onChange={handleInputChange}
          isKeyMatrix={false}
          rows={blockSize || 1}
          cols={3}
        />

        <MatrixInput
          label="Key"
          matrix={keyMatrix}
          onChange={handleInputChange}
          isKeyMatrix={true}
          rows={3}
          cols={3}
        />

        <TextInput 
          style={[styles.input, { marginBottom: 20, width: '60%' }]}
          placeholder="Ingresa el valor de N"
          placeholderTextColor={colors.lightGray}
          keyboardType="numeric"
          onChangeText={handleAlphabetSizeChange}
          value={alphabetSize !== undefined ? alphabetSize.toString() : ''}
        />

        <TouchableOpacity style={styles.button} onPress={handleCipher}>
          <Text style={styles.buttonText}>Cifrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleInverse}>
          <Text style={styles.buttonText}>Inversa</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};
