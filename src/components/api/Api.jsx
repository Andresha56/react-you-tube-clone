import axios from "axios";




const BaseUrl = 'https://youtube-v38.p.rapidapi.com'
const options = {
  params: {
    hl: 'en',
    gl: 'IN' 
  },
  headers: {
    'X-RapidAPI-Key': '01ca63a6f9msh8cfe78a1edec596p13d9d6jsnc58c11b2c5c3',
    'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
  }
};

export const fetchAPI = async (url) => {

	const {data} = await axios.get(`${BaseUrl}/${url}`,options);

	return data;
}
