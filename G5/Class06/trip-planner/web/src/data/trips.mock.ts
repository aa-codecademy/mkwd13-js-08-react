import { TripStatus, type Trip } from "../types/trip.type";

export const mockedTrips: Trip[] = [
  {
    id: 1,
    title: "Summer in Paris",
    destination: "Paris",
    status: TripStatus.PLANNED,
    budget: 2500,
    image:
      "https://images.unsplash.com/photo-1549144511-f099e773c147?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcmlzfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "Tokyo Adventure",
    destination: "Tokyo, Japan",
    status: TripStatus.IN_PROGRESS,
    budget: 3200,
    image:
      "https://plus.unsplash.com/premium_photo-1661914240950-b0124f20a5c1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9reW98ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Bali",
    destination: "Bali, Indonesia",
    status: TripStatus.COMPLETED,
    budget: 1800,
    image:
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFsaSUyMGlzbGFuZHxlbnwwfHwwfHx8MA%3D%3D",
  },
];
