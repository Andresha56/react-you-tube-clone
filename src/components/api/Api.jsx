import axios from "axios";




const BaseUrl = 'https://youtube-v38.p.rapidapi.com'
const options = {
  params: {
    hl: 'en',
    gl: 'IN' 
  },
  headers: {
    'X-RapidAPI-Key':'YOU_YOUR_API_KEY' ,
    'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
  }
};

export const fetchAPI = async (url) => {

	const {data} = await axios.get(`${BaseUrl}/${url}`,options);

	return data;
}
