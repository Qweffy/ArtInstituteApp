import React from 'react'
import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import styles from './Favorites.styles' // Asegúrate de tener estilos similares a los de Home

export const Favorites = () => {
  const navigation = useNavigation()
  const favoriteEvents = useSelector((state) => state.favorites.favoriteEvents)
  console.log('favorite', favoriteEvents)
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('EventDetail', { eventId: item.id })}>
      <Text style={styles.title}>{item.title}</Text>
      {item.image_url && <Image source={{ uri: item.image_url }} style={styles.image} />}
      <Text style={styles.description}>{item.short_description}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <FlatList data={favoriteEvents} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  )
}

export default Favorites
