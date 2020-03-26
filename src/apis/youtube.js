import axios from 'axios';

const KEY = 'AIzaSyCUlXjfsEBIrPiB7ab-0pj1Rv6vcxUZAuY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
      part: 'snippet',
      maxResults: 5,
      key: `${KEY}`
  }
});
