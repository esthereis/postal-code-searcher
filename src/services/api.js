import axios from 'axios';

export function get(zipcode) {
  return axios.get(
    `https://api.zipcodestack.com/v1/search?apikey=01HDEJW59NMWZW5CKYA1XYFJEF&country=nl&codes=${zipcode}`
  );
}
// const api = axios.create({
//   baseURL:
//     'https://api.zipcodestack.com/v1/search?apikey=01HDEJW59NMWZW5CKYA1XYFJEF&country=nl'
// });

// export default api;
