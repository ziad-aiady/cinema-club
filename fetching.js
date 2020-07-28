const key = '953e2363724b01b68f9f2ac475ab8267';

const getMovie = async (movie) => {
    
    const base = 'https://api.themoviedb.org/3/search/movie'
    const query = `?api_key=${key}&query=${movie}`

    const responce = await fetch(base + query);
    const data = await responce.json();

    return data.results[0];
    
};

getMovie('avatar')
  .then(data => console.log(data))
  .catch(err=> console.log(err));