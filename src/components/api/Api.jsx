import axios from "axios";




const BaseUrl = 'https://youtube-v38.p.rapidapi.com'
const options = {
  params: {
    hl: 'en',
    gl: 'IN' 
  },
  headers: {
    'X-RapidAPI-Key': 'fbdcae2843msh1521aef9c97cdc4p100653jsne8f52af9765b',
    'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
  }
};

export const fetchAPI = async (url) => {

	const {data} = await axios.get(`${BaseUrl}/${url}`,options);

	return data;
}
