import axios from 'axios';

async function fetchGetImg(querry, order, page, perPage) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '35847487-2de85eaec6e65c1cfed73bf95',
    q: querry,
    order: order,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: perPage,
  });
  const response = await axios.get(`${BASE_URL}?${params}`);
  return response.data;
}

export { fetchGetImg };
