import { BackHandler, StyleSheet } from "react-native"

export const colors = {
  darkGray: '#1A1A1A',
  lightGray: '#989898',
  blue: '#006fcb',
  blueDarken: '#0058a2',
  textPrimary: 'white',
  textSecondary: '#666666',
  background: '#000',
  black: '#000'
}
export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.darkGray,
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  header: {
    width: '100%',
    backgroundColor: colors.blueDarken,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    color: colors.textPrimary,
    fontWeight: 'bold',
    fontSize: 32,
  },

  keyText: {
    color: colors.blue,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  // Propiedades del contenedor de la matriz
  matrixContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },

  matrixRow: {
    flexDirection: 'row', // Alinea los elementos en una sola fila
    justifyContent: 'center',
    marginBottom: 5, // Espacio entre filas
  },

  input: {
    width: '25%',
    height: 50,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.black,
    margin: 5,
    textAlign: 'center',
    color: colors.textPrimary,
    fontSize: 18,
    paddingHorizontal: 10,

    // Efecto de sombra y elevación
    shadowColor: colors.blue,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 12,
  },

  // Botón para calcular
  button: {
    backgroundColor: colors.blueDarken,
    padding: 10,
    width: '50%',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.textPrimary,
    marginBottom: 10, // Espacio entre botones
  },
  

  buttonText: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  scrollContainer: {
    paddingVertical: 50,
    alignItems: 'center',
    width: '100%', // Asegura que ocupe el ancho completo del contenedor
    flexGrow: 1, // Permite expandirse si hay más contenido
  }
})
