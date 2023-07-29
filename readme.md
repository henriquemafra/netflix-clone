## Netflix Clone

Este é um projeto de aplicativo clone da Netflix desenvolvido em ReactJS, que utiliza a API do TMDb (The Movie Database) para buscar informações sobre os filmes e séries. Abaixo estão as informações sobre a API e como as solicitações são feitas para obter os dados dos filmes e categorias.

## Screenshots

Aqui estão duas capturas de tela do aplicativo:

![Captura de Tela](https://raw.githubusercontent.com/henriquemafra/netflix-clone/main/screenshots/screenshot1.PNG)

## Preview
Você pode visualizar uma versão deste projeto em funcionamento através deste link: [Netflix Clone](https://netflix-clone-git-main-henriquemafra.vercel.app/).

## API TMDb

- Base da API: `https://api.themoviedb.org/3`

A chave da API é usada para autenticar as solicitações e acessar os dados disponíveis na API do TMDb.

## Categorias e Requisições

O arquivo `Tmdb.jsx` contém uma série de funções que fazem solicitações à API do TMDb para obter informações sobre os filmes e categorias exibidas no aplicativo. Abaixo estão as categorias disponíveis e como as solicitações são feitas para cada uma delas:

### Categorias de Filmes

1. Originais do Netflix
   - Slug: `originals`
   - Título: `Originais do Netflix`
   - Requisição: `GET /discover/tv?language=pt-BR&with_origin_country=US&with_watch_providers=213&api_key={API_KEY}`

2. Recomendados para Você
   - Slug: `Recomendados`
   - Título: `Recomendados para Você`
   - Requisição: `GET /discover/movie?with_genres=10751&language=pt-BR&api_key={API_KEY}`

3. Ação
   - Slug: `action`
   - Título: `Ação`
   - Requisição: `GET /discover/movie?with_genres=28&language=pt-BR&api_key={API_KEY}`

4. Comédia
   - Slug: `comedy`
   - Título: `Comédia`
   - Requisição: `GET /discover/movie?with_genres=35&language=pt-BR&api_key={API_KEY}`

5. Família
   - Slug: `family`
   - Título: `Família`
   - Requisição: `GET /discover/movie?with_genres=10751&language=pt-BR&api_key={API_KEY}`

6. Documentários
   - Slug: `documentary`
   - Título: `Documentários`
   - Requisição: `GET /discover/movie?with_genres=99&language=pt-BR&api_key={API_KEY}`

7. Animação
   - Slug: `animation`
   - Título: `Animação`
   - Requisição: `GET /discover/movie?with_genres=16&language=pt-BR&api_key={API_KEY}`

### Obtendo Informações de um Filme ou Série Específica

A função `getMovieInfo` é usada para obter informações detalhadas sobre um filme ou série específica com base em seu ID. Ela recebe dois parâmetros: `movieID` e `type`, onde `movieID` é o ID do filme ou série que se deseja obter informações e `type` indica se é um filme ou uma série.

- Requisição para um Filme: `GET /movie/{movieID}?language=pt-BR&api_key={API_KEY}`
- Requisição para uma Série: `GET /tv/{movieID}?language=pt-BR&api_key={API_KEY}`

## Licença

Este projeto está sob a licença [MIT](https://opensource.org/licenses/MIT).
