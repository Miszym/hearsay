import { apiKey } from '../apiKey';
const apiUrl = 'http://newsapi.org/v2/';

export async function getHeadlines(params) {
   return {
      articles: [
         {
            author: 'Me',
            title: 'Test',
            publishedAt: '2020-05-18T10:23:04Z',
            content:
               "MIAMI -- Life-threatening surf and rip currents will spread along U.S. East coast beaches in the days ahead as Tropical Storm Arthur kicks up ocean swells offshore, the National Hurricane Center warned on Monday. It's another early start for the Atlantic … [+2505 chars]",
            urlToImage:
               'https://s.abcnews.com/images/US/WireAP_62081d4fea6e44e49cd69502c2ea3d12_16x9_992.jpg',
         },
      ],
   };
   const requestUrl = generateHeadlinesRequest(params);
   const response = await fetch(requestUrl, {
      headers: {
         'X-Api-Key': apiKey,
      },
   });
   const data = await response.json();
   return data;
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
