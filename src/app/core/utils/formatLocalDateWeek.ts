export const convertDate = (dateSelected:string, local: string ) => {
      const date = new Date(dateSelected);
      const result = date.toLocaleDateString(local, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
      });
    
      return result;

}
