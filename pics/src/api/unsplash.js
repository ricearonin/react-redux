import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID eb98031931e6e760bab2dafede9ee5157b39528fe4b90bd442f71ca86e66cd2e',
  },
});
