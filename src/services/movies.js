import AxiosService from './xhr';

const endpoint = '/search/movie';

const movies = {
    search: (query) => {
        return AxiosService.Get(endpoint, `&query=${query}`);
    }
}

export default movies;