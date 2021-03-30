const baseURL = 'https://api.themoviedb.org/3/movie';
const apiKey = 'api_key=108a3dcad1f9a8ddef8c60eac64385d7';

export const ApiService = () => ({
    get: (url) =>
        fetch(`${baseURL}/${url}?${apiKey}`)
            .then(data => data.json())
            .catch(err => console.log(err))
});

