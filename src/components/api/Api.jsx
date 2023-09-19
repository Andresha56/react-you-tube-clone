import axios from "axios";




const BaseUrl = 'https://youtube-v38.p.rapidapi.com'
const options = {
  params: {
    hl: 'en',
    gl: 'IN' 
  },
  headers: {
    'X-RapidAPI-Key': '99022101ccmsh7f5f0f6221d9a45p165a04jsn3cbbbf8d01c7',
    'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
  }
};

export const fetchAPI = async (url) => {

	const {data} = await axios.get(`${BaseUrl}/${url}`,options);

	return data;
}
