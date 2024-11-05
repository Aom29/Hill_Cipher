interface inverseMatrixInterface {
  matrix: number[][];
  n: number;
}

export const inverseMatrix = ({ matrix, n }: inverseMatrixInterface): number[][] => {
  const size = matrix.length;
  console.log("Matrix size: ");
  console.log(matrix);

  // Función para calcular el determinante de una matriz 3x3
  const determinant = (mat: number[][]): number => {
    if (mat.length !== 3 || mat[0].length !== 3) throw new Error("Solo soporta matrices 3x3");
    return (
      mat[0][0] * (mat[1][1] * mat[2][2] - mat[1][2] * mat[2][1]) -
      mat[0][1] * (mat[1][0] * mat[2][2] - mat[1][2] * mat[2][0]) +
      mat[0][2] * (mat[1][0] * mat[2][1] - mat[1][1] * mat[2][0])
    );
    // return 1;
  };

  const determinant2 = (mat: number[][]): number => {
    if (mat.length !== 2 || mat[0].length !== 2) throw new Error("Solo soporta matrices 2x2");
    return mat[0][0] * mat[1][1] - mat[0][1] * mat[1][0];
  }

  // Función para calcular el MCD
  const gcd = (a: number, b: number): number => (b === 0 ? Math.abs(a) : gcd(b, a % b));

  // Función para calcular el inverso modular
  // const modularInverse = (det: number, mod: number): number | null => {
  //   for (let x = 1; x < mod; x++) {
  //     if ((det * x) % mod === 1) return x;
  //   }
  //   return null; // No existe inverso
  // };
  const modularInverse = (a: number, mod: number): number | null => {
    let m0 = mod;
    let x0 = 0;
    let x1 = 1;
  
    if (mod === 1) return null; // No hay inverso si mod es 1
  
    while (a > 1) {
      // Cociente
      const q = Math.floor(a / mod);
  
      // Actualizar mod y a
      [a, mod] = [mod, a % mod];
  
      // Actualizar x0 y x1
      [x0, x1] = [x1 - q * x0, x0];
    }
  
    // Asegurarse de que x1 sea positivo
    if (x1 < 0) x1 += m0;
  
    return x1;
  };
  

  // Determinante de la matriz
  const det = determinant(matrix);
  console.log(det);

  // Validar si el determinante y `n` son coprimos
  if (gcd(det, n) !== 1) {
    // Si no son coprimos, retorna una matriz de ceros
    return Array.from({ length: size }, () => Array(size).fill(9999));
  }

  // Calcular el inverso modular del determinante
  const detInverse = modularInverse(det, n);
  if (detInverse === null) {
    // Si no existe el inverso modular, retorna una matriz de ceros
    return Array.from({ length: size }, () => Array(size).fill(0));
  }

  console.log("detInverse = " + detInverse);

  const adjugateMatrix = (mat: number[][]): number[][] => {
    const size = mat.length;
  
    // Función para calcular el determinante de una matriz 2x2
    const determinant2 = (submat: number[][]): number => {
      return submat[0][0] * submat[1][1] - submat[0][1] * submat[1][0];
    };
  
    // Función para calcular el cofactor de un elemento en una posición dada
    const cofactor = (mat: number[][], row: number, col: number): number => {
      const submatrix = mat
        .filter((_, r) => r !== row)
        .map(r => r.filter((_, c) => c !== col));
      return ((row + col) % 2 === 0 ? 1 : -1) * determinant2(submatrix);
    };
  
    // Calcular la matriz de cofactores
    const cofactorMatrix = mat.map((_, row) => 
      mat[row].map((_, col) => cofactor(mat, row, col))
    );
  
    // Transponer la matriz de cofactores para obtener la adjunta
    const adjugate = cofactorMatrix[0].map((_, colIndex) => 
      cofactorMatrix.map(row => row[colIndex])
    );
  
    return adjugate;
  };
  


  // Transponer y multiplicar por el inverso modular
  const adjugate = adjugateMatrix(matrix);
  console.log("Adjugate matrix transposed:");
  console.log(adjugate);
  const inverse = adjugate.map(row =>
    row.map(value => ((value * detInverse) % n + n) % n) // Mantener módulo n
  );
  console.log("Inverse matrix:");
  console.log(inverse);

  return inverse;
};
