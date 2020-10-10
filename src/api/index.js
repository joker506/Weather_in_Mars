import baseURL from '@/api/baseURL'

export default {
    getWeather() {
        return baseURL().get(
            "insight_weather/?api_key=l05xPO4WedAXSPogBH4msgASgv1LcQGxQeYD2hXx&feedtype=json&ver=1.0"
        );
    },
};