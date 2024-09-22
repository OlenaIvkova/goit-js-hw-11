const API_KEY = '46125856-848a47cf49f0e2da350750fba'; // API-ключ
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query, page = 1, perPage = 12) {
    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${page}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error fetching images');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error in fetchImages:', error);
        throw error;
    }
}