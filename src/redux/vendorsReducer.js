export function addVendor(vendor) {
   return {
      type: 'ADD_VENDOR',
      payload: vendor,
   };
}

export function removeVendor(vendor) {
   return {
      type: 'REMOVE_VENDOR',
      payload: vendor,
   };
}

export function vendorsReducer(vendors = ['abc-news'], action) {
   switch (action.type) {
      case 'ADD_VENDOR':
         const updatedVendors = [...vendors];
         updatedVendors.push(action.payload);
         return updatedVendors;
      case 'REMOVE_VENDOR':
         return vendors.filter((vendor) => vendor != action.payload);
      default:
         return vendors;
   }
}
