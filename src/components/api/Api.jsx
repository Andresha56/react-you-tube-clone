import axios from "axios";



// const options = {
//   params: {hl: 'en', gl: 'US'},
//   'X-RapidAPI-Key': 'd5941792bcmsh6642ac748fc41b6p1c3533jsnb00e536f7b97',
//   'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
// };

// export const fetchAPI = async (url) => {

// 	const {data} = await axios.get(`${BaseUrl}/${url}`,options);

// 	return data;
// }

const BaseUrl = 'https://youtube-v38.p.rapidapi.com'
const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': 'd5941792bcmsh6642ac748fc41b6p1c3533jsnb00e536f7b97',
    'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
  }
};

export const fetchAPI = async (url) => {

	const {data} = await axios.get(`${BaseUrl}/${url}`,options);

	return data;
}
