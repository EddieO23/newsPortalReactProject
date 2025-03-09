import axios from 'axios';
import { getRequest } from './requests';
import { baseUrl } from './constants';

const apiKey = import.meta.env.VITE_API_KEY

export const getTopHeadlines = async (category) => {
  const url = `${baseUrl}/top-headlines?country=us&apiKey=${apiKey}${category ? `&category=${category}` : ''}`;
  return await getRequest(url);
};
