export default function WatchlistPlaceholderCard() {
  return (
    <div className="card">
      <div className="card_left">
        <div className="card_datails">
          <h1>Add your first watchlist item! </h1>
          <div className="card_cat">
            {/*  <p className="year"> </p> */}
            <p className="genre"> {} </p>
            <p className="time">{} </p>
          </div>
          <p className="disc">
            Use the searchbar to search for a show, then click watchlist!
          </p>
          <a href={"./"} className="readmore">
            Homepage
          </a>
        </div>
      </div>
      <div className="card_right">
        <div className="img_container">
          <img src="./placeholderimage.webp" alt="" />
        </div>
      </div>
    </div>
  );
}
