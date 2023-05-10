import * as React from 'react';

export interface IRecommendedCardProps {
}

export default function RecommendedCard (props: IRecommendedCardProps) {
  return (
    <div className="recommended-foryou">
          <div className='recommendation-available-container'>
<p>Available on: </p>
        </div>
        <div className='recommendation-title-container'>

        <h1 className='recommendation-title'>OPPENHEIMER</h1>
        </div>
    </div>
  );
}
