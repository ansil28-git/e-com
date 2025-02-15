import React from 'react';

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      rating: 5,
      comment: 'Amazing service! Highly recommend to everyone.',
      avatar: 'https://i.pravatar.cc/100?img=1',
    },
    {
      id: 2,
      name: 'Jane Smith',
      rating: 4,
      comment: 'Great experience, though delivery was a bit slow.',
      avatar: 'https://i.pravatar.cc/100?img=2',
    },
    {
      id: 3,
      name: 'Emily Johnson',
      rating: 3,
      comment: 'Good product but could be cheaper.',
      avatar: 'https://i.pravatar.cc/100?img=3',
    },
  ];

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md mt-20">
      <h2 className="text-xl font-bold mb-10">Customer Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id} className="mb-4 border-b pb-4">
          <div className="flex items-center mb-2">
            <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-3" />
            <div>
              <h3 className="font-semibold">{review.name}</h3>
              <p className="text-yellow-500">{'★'.repeat(review.rating)}</p>
            </div>
          </div>
          <p className="text-gray-600">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};


export default ReviewSection;