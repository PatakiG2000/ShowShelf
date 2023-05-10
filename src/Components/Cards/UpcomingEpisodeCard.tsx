import * as React from 'react';

export interface IUpcomingEpisodeCardProps {
}

export default function UpcomingEpisodeCard (props: IUpcomingEpisodeCardProps) {
  return (
    <div className='upcoming-episode-card'>
     <p>Breaking Bad</p>
     <p>Your upcoming episode is: "Epizód neve"</p>
     <p>Watch it on: </p>
     <button>Go to tracklist</button>
    </div>
  );
}
