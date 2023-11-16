import { apiConfig } from '../config/apiConfig';

export async function fetchTalksData(): Promise<unknown> {
    try {
      const response = await fetch(apiConfig.talksEndpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'no-cors',
      });
      console.log(response);
      if (!response.ok) {
        throw new Error(`Failed to fetch talks data: ${response.status} ${response.statusText}`);
      }
  
      const jsonData = await response.json();
      console.log(jsonData);
      return jsonData;
    } catch (error) {
      console.error('Error fetching talks data:', error);
      throw error;
    }
  }
  