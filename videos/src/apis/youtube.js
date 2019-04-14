import axios from 'axios';

const KEY = 'AIzaSyCYWdyu38qqPGWuYMkdsNUGrHe79z8jgHo';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: '5',
    key: KEY,
  },
});
