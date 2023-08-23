import axios from "axios";
const BaseUrl = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_YOUTUBE_API_KEY ,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'

  },
};

export const fetchAPI = async (endpoint) => {
  const {data} = await axios.get(`${BaseUrl}/${endpoint}`, options);
  return data;
};
