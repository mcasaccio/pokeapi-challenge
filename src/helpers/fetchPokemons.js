const baseUrl = 'https://pokeapi.co/api/v2' //URL API en duro

export const fetchPokemons = (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;

    if (method === 'GET') {
        return fetch(url);
    }
}