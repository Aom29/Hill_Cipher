interface HillCipherInterface {
  message: number[];
  keyMatrix: number[];
  n: number;
}

export const hillCipher = ({ message, keyMatrix, n }: HillCipherInterface): number[] => {
  console.log("Cifrando con:", message, keyMatrix, n);

  const encryptedMessage: number[] = message.map((_, index) => 
    (message[index] + keyMatrix[index % keyMatrix.length]) % n
  );

  return encryptedMessage;
};
