export function getTimestampFromUTF(utfDate) {
   if (typeof utfDate !== 'string') {
      return '';
   }
   const datePortions = utfDate.split('T');
   if (!datePortions[1]) {
      return datePortions[0];
   }
   const timePortions = datePortions[1].split(':');
   const time = `${timePortions[0]}:${timePortions[1]}`;
   return `${datePortions[0]} ${time}`;
}
