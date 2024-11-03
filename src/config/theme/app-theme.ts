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
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 10,
    marginBottom: 20,
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
  },

  buttonText: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})