export function addSource(source) {
   return {
      type: 'ADD_SOURCE',
      payload: source,
   };
}

export function removeSource(source) {
   return {
      type: 'REMOVE_SOURCE',
      payload: source,
   };
}

export function sourcesReducer(sources = ['abc-news'], action) {
   switch (action.type) {
      case 'ADD_SOURCE':
         const updatedSources = [...sources];
         updatedSources.push(action.payload);
         return updatedSources;
      case 'REMOVE_SOURCE':
         return sources.filter((source) => source != action.payload);
      default:
         return sources;
   }
}
