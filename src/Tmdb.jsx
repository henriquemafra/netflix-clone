const API_KEY = 'ba2f8d46e5c37cfd9483d5e625e603af'
const API_BASE = 'https://api.themoviedb.org/3'

/* Categorias
- Prime
Amazon Originais e exclusivos
-
Filmes para toda a família
-Filmes populares */

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'Originals',
                title: 'Originais do Prime',
                items: await basicFetch(`/discover/tv?with_network=1024&language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'Familia',
                title: 'Filmes para toda a família',
                items: await basicFetch(`/discover/movie?with_genres=family?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'Populares',
                title: 'Filmes populares',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`),
            }
        ]
    }
}