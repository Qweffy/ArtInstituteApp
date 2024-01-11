import axios from 'axios'

const API_BASE_URL = 'https://api.artic.edu/api/v1'

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
})

const eventService = {
  getEvents: async (page = 1, limit = 10) => {
    try {
      const response = await axiosInstance.get('/events', {
        params: {
          fields: 'id,title,image_url,short_description', // Ajustar según los campos necesarios
          page,
          limit,
        },
      })
      return {
        events: response.data.data,
        pagination: response.data.pagination,
      }
    } catch (error) {
      console.error('Error al obtener los eventos: ', error)
      throw error
    }
  },

  getEventDetails: async (eventId) => {
    try {
      const response = await axiosInstance.get(`/events/${eventId}`, {
        params: {
          fields:
            'id,title,image_url,short_description,hero_caption,description,location,start_date,end_date,start_time,end_time',
        },
      })
      return response.data
    } catch (error) {
      console.error('Error al obtener detalles del evento: ', error)
      throw error
    }
  },
}

export default eventService
