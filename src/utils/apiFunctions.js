import { apiKey } from '../apiKey';
const apiUrl = 'http://newsapi.org/v2/';

export async function getHeadlines(params) {
   const requestUrl = generateHeadlinesRequest(params);
   const response = await fetch(requestUrl, {
      headers: {
         'X-Api-Key': apiKey,
      },
   });
   const data = await response.json();
   return data.articles;
}

function generateHeadlinesRequest(params) {
   let url = `${apiUrl}top-headlines`;
   if (!params || Object.keys(params).length === 0) {
      return url;
   }
   url += '?';
   for (let key in params) {
      url += `${key}=${params[key]}&`;
   }
   url = url.slice(0, url.length - 1);
   return url;
}
