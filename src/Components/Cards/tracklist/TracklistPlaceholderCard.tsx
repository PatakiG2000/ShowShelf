import ProgressBar from "../../ProgressBar";

export interface ITracklistCardProps {
  title: string;
  id: number;
  year: number;
  genre: string;
  time: number;
  img: string;
  date: number;
}

export default function TracklistPlaceholderCard(props: ITracklistCardProps) {
  return (
    <>
      <div className="tracklist-card">
        <div className="tracklist-head">
          <h1>Add your first tracklist item</h1>
        </div>
        <p>
          The seasons and episodes of your chosen show will appear here, where
          you will be able to track your progress. Use the searchbar and then
          the tracklist button to add a show.
        </p>
        <ProgressBar
          progress={40}
          epTitle={"Here will be your next episode displayed"}
        />
      </div>
    </>
  );
}
