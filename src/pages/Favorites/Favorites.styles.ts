import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native'

type FavoritesStyleType = {
  container: ViewStyle
  itemContainer: ViewStyle
  title: TextStyle
  description: TextStyle
  image: ImageStyle
}

export default StyleSheet.create<FavoritesStyleType>({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Puedes cambiar el color de fondo según tus preferencias
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd', // Color del borde de separación de cada ítem
    padding: 10, // Espaciado interior del contenedor de cada ítem
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5, // Espacio debajo del título
  },
  description: {
    fontSize: 14,
    color: '#666', // Color del texto de la descripción
  },
  image: {
    width: '100%', // Ancho de la imagen
    height: 200, // Altura de la imagen
    resizeMode: 'cover', // Ajuste de la imagen
    marginVertical: 10, // Espacio vertical alrededor de la imagen
  },
})
