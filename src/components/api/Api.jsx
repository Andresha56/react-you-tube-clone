import axios from "axios";




const BaseUrl = 'https://youtube-v38.p.rapidapi.com'
const options = {
  params: {
    hl: 'en',
    gl: 'IN' 
  },
  headers: {
    'X-RapidAPI-Key': '9d5b4fdd02msh7d67326b259b98dp19bc79jsn308da28e1697',
    'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
  }
};

export const fetchAPI = async (url) => {

	const {data} = await axios.get(`${BaseUrl}/${url}`,options);

	return data;
}
