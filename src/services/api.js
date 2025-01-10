import axios from 'axios';

const fetchMovies = async () => {
  try {
    const response = await axios.get('https://api.example.com/movies', {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};

export default fetchMovies;
