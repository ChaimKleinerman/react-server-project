interface Trip {
    _id:string,
    id: string;
    name: string;
    destination: string;
    startDate: string; // Should be in the format 'YYYY-MM-DD'
    endDate: string; // Should be in the format 'YYYY-MM-DD'
    description: string;
    price: number;
    image: string; // URL to the trip's image
    activities: string[]; // Array of activities available during the trip
  }
  
export type{Trip}