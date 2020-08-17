import AxiosService from './xhr';
import EndPoint from './endpoint'

const endpoint = EndPoint.tmdb.tvshows;

const tvshow = {
    search: (query) => {
        return AxiosService.Get(endpoint, `&query=${query}`);
    }
}

export default tvshow;