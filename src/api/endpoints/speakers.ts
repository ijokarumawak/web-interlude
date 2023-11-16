import { apiConfig } from '../config/apiConfig';


export async function fetchSpeakersData() {
    try {
      const response = await fetch(apiConfig.speakersEndpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      if (!response.ok) {
        throw Error(`Failed to fetch speakers data: ${response.status} ${response.statusText}`);
      }
  
      const jsonData = await response.json();
      console.log(jsonData);
      return jsonData;
    } catch (error) {
      console.error('Error fetching speakers data:', error);
      throw error;
    }
  }

