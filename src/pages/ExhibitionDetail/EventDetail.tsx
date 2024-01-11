import React, { useState, useEffect } from 'react'
import { Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import StarRating from 'react-native-star-rating-widget'
import styles from './EventDetail.styles'
import eventService from '../../services/exhibitionService'
import { addFavorite, removeFavorite } from '../../store/slices/favoritesSlice'

interface EventDetail {
  id: string
  title: string
  short_description: string | null
  image_url: string | null
  hero_caption: string | null
  description: string | null
  location: string | null
  start_date: string
  end_date: string
  start_time: string
  end_time: string
}

const EventDetailComponent = ({ route }) => {
  const { eventId } = route.params
  const dispatch = useDispatch()
  const favoriteEvents = useSelector((state) => state.favorites.favoriteEvents)
  const [eventDetail, setEventDetail] = useState<EventDetail | null>(null)

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await eventService.getEventDetails(eventId)
        setEventDetail(response.data)
      } catch (error) {
        console.error('Error al obtener los detalles del evento: ', error)
      }
    }

    fetchEventDetails()
  }, [eventId])

  const isFavorite = eventDetail ? favoriteEvents.some((event) => event.id === eventDetail.id) : false

  const toggleFavorite = () => {
    if (eventDetail) {
      if (isFavorite) {
        dispatch(removeFavorite(eventDetail))
      } else {
        dispatch(addFavorite(eventDetail))
      }
    }
  }

  if (!eventDetail) {
    return <Text>Cargando...</Text>
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{eventDetail.title}</Text>
      {eventDetail.image_url && <Image source={{ uri: eventDetail.image_url }} style={styles.image} />}
      <Text style={styles.description}>{eventDetail.short_description}</Text>
      <Text style={styles.detail}>{eventDetail.hero_caption}</Text>
      <Text style={styles.detail}>{eventDetail.description}</Text>
      <Text style={styles.detail}>Lugar: {eventDetail.location}</Text>
      <Text style={styles.detail}>Fecha de Inicio: {eventDetail.start_date}</Text>
      <Text style={styles.detail}>Fecha de Fin: {eventDetail.end_date}</Text>
      <Text style={styles.detail}>Hora de Inicio: {eventDetail.start_time}</Text>
      <Text style={styles.detail}>Hora de Fin: {eventDetail.end_time}</Text>
      <TouchableOpacity onPress={toggleFavorite}>
        <StarRating
          rating={isFavorite ? 1 : 0}
          maxStars={1}
          starSize={30}
          color={isFavorite ? 'yellow' : 'gray'}
          onChange={toggleFavorite}
        />
      </TouchableOpacity>
    </ScrollView>
  )
}

export default EventDetailComponent
