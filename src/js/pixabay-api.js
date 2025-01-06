export const fetchImages = function (query) {
  const API_KEY = '10567451-e89d654aa7ed9140fe488f539';
  const apiBaseUrl = 'https://pixabay.com/api/';

  return fetch(
    `${apiBaseUrl}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
};
