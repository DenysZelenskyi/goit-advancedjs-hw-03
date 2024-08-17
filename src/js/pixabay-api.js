export const fetchImages = (query) => {
  const API_KEY = '10567451-e89d654aa7ed9140fe488f539';
  const URL = `https://pixabay.com/api/?per_page=10&image_type=photo&orientation=horizontal&safesearch=true&q=${query}&key=${API_KEY}`;

  return fetch(URL).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
};
