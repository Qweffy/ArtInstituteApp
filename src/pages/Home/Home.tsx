import React, { useState, useEffect } from 'react'
import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import StarRating from 'react-native-star-rating-widget'
import styles from './Home.styles'
import eventService from '../../services/exhibitionService'
import { addFavorite, removeFavorite } from '../../store/slices/favoritesSlice'

interface Event {
  id: string
  title: string
  short_description: string | null
  image_url: string | null
}

const Home = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const favoriteEvents = useSelector((state) => state.favorites.favoriteEvents)
  const [events, setEvents] = useState<Event[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const toggleFavorite = (event) => {
    const isCurrentlyFavorite = favoriteEvents.some((favEvent) => favEvent.id === event.id)
    if (isCurrentlyFavorite) {
      dispatch(removeFavorite(event))
    } else {
      dispatch(addFavorite(event))
    }
  }

  const loadEvents = async () => {
    if (isLoading) return

    setIsLoading(true)
    try {
      const { events: newEvents } = await eventService.getEvents(currentPage)
      setEvents((prev) => [...prev, ...newEvents])
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadEvents()
  }, [currentPage])

  const renderItem = ({ item }) => {
    const isFavorite = favoriteEvents.some((favEvent) => favEvent.id === item.id)
    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('EventDetail', { eventId: item.id })}>
          <Text style={styles.title}>{item.title}</Text>
          {item.image_url && <Image source={{ uri: item.image_url }} style={styles.image} />}
          <Text style={styles.description}>{item.short_description}</Text>
        </TouchableOpacity>
        <StarRating
          rating={isFavorite ? 1 : 0}
          onChange={() => toggleFavorite(item)}
          maxStars={1}
          starSize={30}
          color={isFavorite ? 'yellow' : 'gray'}
        />
      </View>
    )
  }

  return (
    <FlatList
      data={events}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      onEndReached={() => setCurrentPage((prev) => prev + 1)}
      onEndReachedThreshold={0.5}
    />
  )
}

export default Home
