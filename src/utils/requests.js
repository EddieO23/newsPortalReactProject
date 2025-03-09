import axios from "axios";

export const getRequest = async (url) => {
 try {
  const response = await axios.get(url)
  return {data: response.data}
 } catch (error) {
  const status = error.response?.status
  const details = error.response?.data
  console.log(error);
  return {
    error: {
      message: `error fetching ${url}`, status, details, name:"requestError"
    }
  }
 }
}