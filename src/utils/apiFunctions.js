import { apiKey } from '../apiKey';
const apiUrl = 'http://newsapi.org/v2/';

export async function getHeadlines(params) {
   // return {
   //    articles: [
   //       {
   //          author: 'Me',
   //          title: 'Test',
   //          publishedAt: '2020-05-18T10:23:04Z',
   //          content:
   //             "MIAMI -- Life-threatening surf and rip currents will spread along U.S. East coast beaches in the days ahead as Tropical Storm Arthur kicks up ocean swells offshore, the National Hurricane Center warned on Monday. It's another early start for the Atlantic … [+2505 chars]",
   //          urlToImage:
   //             'https://s.abcnews.com/images/US/WireAP_62081d4fea6e44e49cd69502c2ea3d12_16x9_992.jpg',
   //       },
   //    ],
   // };
   const requestUrl = generateRequest('top-headlines', params);
   const response = await fetch(requestUrl, {
      headers: {
         'X-Api-Key': apiKey,
      },
   });
   const data = await response.json();
   return data;
}

export async function getSources() {
   // return [
   //    {
   //       id: 'abc-news',
   //       name: 'ABC News',
   //       description:
   //          'Your trusted source for breaking news,aaaaaaaaaaaa aaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaaa analysis, exclusive interviews, headlines, and videos at ABCNews.com.',
   //       language: 'en',
   //       url: 'https://abcnews.go.com',
   //    },
   //    {
   //       id: 'abc-news3',
   //       name: 'ABC News',
   //       description:
   //          'Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.',
   //       language: 'en',
   //       url: 'https://abcnews.go.com',
   //    },
   //    {
   //       id: 'abc-news4',
   //       name: 'ABC News',
   //       description:
   //          'Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.',
   //       language: 'en',
   //       url: 'https://abcnews.go.com',
   //    },
   // ];
   const requestUrl = generateRequest('sources');
   const response = await fetch(requestUrl, {
      headers: {
         'X-Api-Key': apiKey,
      },
   });
   const data = await response.json();
   return data.sources;
}

function generateRequest(endpoint, params) {
   let url = `${apiUrl}${endpoint}`;
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
