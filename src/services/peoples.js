import serviceConfig from './config';

const peoples = {
    getAll: async (urlParam = '',endPoint = '') => {
        const result = await fetch(`${serviceConfig.baseUrl}/${endPoint}/${urlParam}`);
        const results = await result.json();
        return results;
    },
}

export default peoples;