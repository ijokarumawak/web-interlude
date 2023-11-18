import { apiConfig } from '../config/apiConfig';
import { getRequest } from './request';

export interface Speaker {
  id: number;
  name: string;
  company: string;
  jobTitle: string;
  profile: string;
  githubId: string;
  twitterId: string;
  avatarUrl: string;
}

export async function getSpeakers(): Promise<Speaker[]> {
    try {
      return await getRequest(apiConfig.speakersEndpoint);
    } catch (error) {
      console.error('Error fetching speakers data:', error);
      throw error;
    }
  }

