import axios from 'axios';
// import axios from 'axios/dist/axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '33347523-21eeb7913e8f8d453adb05c33';
export const perPage = 12;

export const getImages = async (query, page) => {
  const response = await axios.get(
    `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response.data;
};

export const normalizedImages = imagesArray =>
  imagesArray.map(({ id, tags, webformatURL, largeImageURL }) => {
    return { id, tags, webformatURL, largeImageURL };
  });
