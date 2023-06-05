export default function WatchlistPlaceholderCard() {
  return (
    <div className="card">
      <div className="card_left">
        <div className="card_details">
          <h1>Add your first watchlist item! </h1>
          <div className="card_cat">
            {/*  <p className="year"> </p> */}
            <p className="genre"> {} </p>
            <p className="time">{} </p>
          </div>
          <p className="disc">
            Your watchlist is the perfect place to keep track of all the series
            and shows you want to watch. Whether you've heard about a
            captivating new series or want to catch up on a beloved show, this
            watchlist feature will ensure you never forget what you want to
            enjoy. Use the search bar and click the watchlist button in order to
                        add to this list.
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
