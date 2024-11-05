interface HillCipherInterface {
  message: number[][];
  keyMatrix: number[][];
  n: number;
}

export const hillCipher = ({ message, keyMatrix, n }: HillCipherInterface): number[][] => {
  console.log("Cifrando con:", message, keyMatrix, n);

  const multipliedResult: number[][] = message.map((row) => 
    keyMatrix[0].map((_, colIndex) => 
      row.reduce((sum, messageVal, rowIndex) => sum + (messageVal * keyMatrix[rowIndex][colIndex]), 0)
    )
  );
  

  const encryptedMessage: number[][] = multipliedResult.map(row => 
    row.map(value => ((value % n) + n) % n)
  );

  console.log(encryptedMessage);
  return encryptedMessage;
};
