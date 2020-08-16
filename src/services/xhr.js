import axios from 'axios'

class AxiosService {
    constructor() {
        this.basePath = 'https://api.themoviedb.org/3';
        this.apiKey = '?api_key=d55b131ebc9221c062a5b6d295270d4b'
    }
    async Get(endpoint, queryParams) {
        const finalUrl = `${this.basePath}${endpoint}${this.apiKey}${queryParams}`
        const response = await axios.get(finalUrl)
        const jsonResponse = await response.data;
        return jsonResponse;
    }
}

export default new AxiosService();
