import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { colors, styles } from "../../config/theme/app-theme";
import React, { useState } from "react";
import Header from "../components/Header";
import MatrixInput from "../components/MatrixInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { hillCipher } from "../helpers/HillCipher";

export const CalculatorScreen: React.FC = () => {
  const [matrix, setMatrix] = useState<string[]>(Array(9).fill(''));
  const [keyMatrix, setKeyMatrix] = useState<string[]>(Array(9).fill(''));
  const [alphabetSize, setAlphabetSize] = useState<number>();

  const handleInputChange = (value: string, index: number, isKeyMatrix: boolean) => {
    if (isKeyMatrix) {
      const updatedKeyMatrix = [...keyMatrix];
      updatedKeyMatrix[index] = value;
      setKeyMatrix(updatedKeyMatrix);
    } 
    
    else {
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

  const checkMatrixFilled = () => {
    return matrix.every(value => value != '') && keyMatrix.every(value =>  value != '');
  };

  const checkInputN = () => {
    return Number.isInteger(alphabetSize) && alphabetSize != undefined;
  }

  const handleCipher = () => {
    if (checkMatrixFilled() && checkInputN()) {
      const intMatrix = matrix.map(value => parseInt(value, 10));
      const intKey = keyMatrix.map(value => parseInt(value, 10));
      hillCipher({
        message: intMatrix, 
        keyMatrix: intKey, 
        n: alphabetSize! // Indicar que en este punto, esa variable no es null
      });

    } else {
      Alert.alert("Error", "Por favor, llena correctamente los campos y asegúrate de que N sea válido");
    }
  }
  

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Hill Cipher"/>
      
      <MatrixInput
        label="Message"
        matrix={matrix}
        onChange={handleInputChange}
        isKeyMatrix={false}
      />

      <MatrixInput
        label="Key"
        matrix={keyMatrix}
        onChange={handleInputChange}
        isKeyMatrix={true} 
      />

      <TextInput 
        style={[styles.input, {marginBottom: 20, width: '60%'}]}
        placeholder="Ingresa el valor de N"
        placeholderTextColor={colors.lightGray}
        keyboardType="numeric"
        onChangeText={handleAlphabetSizeChange}
        value={alphabetSize !== undefined ? alphabetSize.toString() : ''}
      />

      <TouchableOpacity style={styles.button} onPress={handleCipher}>
        <Text style={styles.buttonText}>Cifrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
