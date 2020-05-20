import { getSourcesFromStorage, saveSources } from '../utils/dataFunctions';

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

export function sourcesReducer(sources = getSourcesFromStorage(), action) {
   switch (action.type) {
      case 'ADD_SOURCE': {
         const updatedSources = [...sources];
         updatedSources.push(action.payload);
         saveSources(updatedSources);
         return updatedSources;
      }
      case 'REMOVE_SOURCE': {
         const updatedSources = sources.filter(
            (source) => source != action.payload
         );
         saveSources(updatedSources);
         return updatedSources;
      }
      default:
         return sources;
   }
}
