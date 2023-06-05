import ProgressBar from "../../ProgressBar";

export default function TracklistPlaceholderCard() {
  return (
    <>
      <div className="tracklist-card">
        <div className="tracklist-head">
          <h1>Add your first tracklist item!</h1>
        </div>
        <p className="tracklist-placeholder-text">
          The tracklist is designed to help you keep track of your ongoing
          series and shows in one place. Whether you're a binge-watcher, a
          dedicated fan, or simply someone who enjoys discovering new content,
          this tracker is here to enhance your viewing experience. You will
          never forget the upcoming episode again.You can add items to this list
          by using the search bar and selecting the show from the results.
        </p>
        <ProgressBar
          progress={Math.random() * 100}
          epTitle={"Will be displayed here"}
        />
      </div>
    </>
  );
}
