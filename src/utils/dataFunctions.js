export function saveSources(sources) {
   localStorage.setItem('sources', JSON.stringify(sources));
}

export function getSourcesFromStorage() {
   const sources = JSON.parse(localStorage.getItem('sources'));
   if (sources && sources.length > 0) {
      return sources;
   } else return ['abc-news'];
}
