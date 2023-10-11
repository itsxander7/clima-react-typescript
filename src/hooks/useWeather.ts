import axios from 'axios'
import { SearchType } from '../types'

export default function useWeather() {

    const fetchWeather = async (search: SearchType) => {

        const appId = 'b45f484d35c875c7a973ea5bf8f7dc89'
        try {
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`
            const {data} = await axios(geoUrl)
            console.log(data)

        } catch (error) {
            console.log(error)
        }
    }

    return {
        fetchWeather
    }
}