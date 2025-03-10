import axios from 'axios';
import { getRequest } from './requests';
import { baseUrl } from './constants';

const apiKey = import.meta.env.VITE_API_KEY

export const getTopHeadlines = async (category, pageNumber) => {
  const url = `${baseUrl}/top-headlines?country=us&apiKey=${apiKey}${category ? `&category=${category}` : ''}${pageNumber ? `&page=${pageNumber}` : ``}`;
  return await getRequest(url);
};

export const getByQuery = async (query, pageNumber) => {
  const url = `${baseUrl}/everything${query ? `?q=${query}` : ''}&apiKey=${apiKey}${pageNumber ? `&page=${pageNumber}` : ``}&pageSize=20`;
  return await getRequest(url);
}

// https://newsapi.org/v2/everything?q=bitcoin&apiKey=9b732a8808d34aa890a9839a0d5f7ac1