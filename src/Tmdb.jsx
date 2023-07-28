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
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch(`/discover/tv?language=pt-BR&with_origin_country=US&with_watch_providers=213&api_key=${API_KEY}`),
            },
            {
                slug: 'Recomendados',
                title: 'Recomendados para Você',
                items: await basicFetch(`/discover/movie?with_genres=10751?language=pt-BR&api_key=${API_KEY}`),
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?language=pt-BR&with_genres=28&api_key=${API_KEY}`),
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?language=pt-BR&with_genres=35&api_key=${API_KEY}`),
            },
            {
                slug: 'family',
                title: 'Família',
                items: await basicFetch(`/discover/movie?language=pt-BR&with_genres=10751&api_key=${API_KEY}`),
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?language=pt-BR&with_genres=99&api_key=${API_KEY}`),
            },
            {
                slug: 'animation',
                title: 'Animação',
                items: await basicFetch(`/discover/movie?language=pt-BR&with_genres=16&api_key=${API_KEY}`),
            },
        ]

    },

    getMovieInfo: async (movieID, type) => {

    let info = {};
    
    if(movieID) {

    switch(type) {
        case 'movie':
            info = await basicFetch(`/movie/${movieID}?language=pt-BR&api_key=${API_KEY}`);
        break;
        case 'tv':
            info = await basicFetch(`/tv/${movieID}?language=pt-BR&api_key=${API_KEY}`);
        break;
    }
}
return info
            
    }
}