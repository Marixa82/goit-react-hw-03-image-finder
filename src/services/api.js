import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '37602410-6b8217f70cb955aee1a8b2f66';

export const fetchAllData = async (searchQuery, page) => {
    const response = await axios.get(URL, {
        params: {
            key: KEY,
            q: searchQuery,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
        },
    });
    return response.data;

}

export default fetchAllData;
// async function fetchAllData(urls) {
//     const results = [];
//     for (const url of urls) {
//         const data = await fetchData(url);
//         results.push(data);
//     }
//     return results;
// }