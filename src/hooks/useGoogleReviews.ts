import { useState, useEffect } from 'react';

interface Review {
  author_name: string;
  rating: number;
  text: string;
  time: number;
}

interface ReviewData {
  rating: number;
  totalReviews: number;
  reviews: Review[];
}

export function useGoogleReviews() {
  const [reviewData, setReviewData] = useState<ReviewData>({
    rating: 4.9,
    totalReviews: 150,
    reviews: [
      {
        author_name: "John D.",
        rating: 5,
        text: "Amazing work on my vehicle wrap! The team at Wrap Wizardz did an incredible job.",
        time: Math.floor(Date.now() / 1000) - 86400
      },
      {
        author_name: "Sarah M.",
        rating: 5,
        text: "Best ceramic coating service in Warminster. Highly recommend!",
        time: Math.floor(Date.now() / 1000) - 172800
      },
      {
        author_name: "Mike R.",
        rating: 5,
        text: "Professional window tinting service. Great attention to detail.",
        time: Math.floor(Date.now() / 1000) - 259200
      }
    ]
  });

  return { reviewData };
}
