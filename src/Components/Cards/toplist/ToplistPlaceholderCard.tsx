export default function ToplistPlaceholderCard() {
  return (
    <div className="card">
      <div className="card_left">
        <div className="card_datails">
          <h1>Add your first toplist item </h1>
          <div className="card_cat">
            <p className="year">Do it now! </p>
            <p className="genre"> {} </p>
            <p className="time">{} </p>
          </div>
          <p className="disc">
            Use the searchbar to search for a show, then click rate!
          </p>
          <a href={"./"}>Homepage</a>
        </div>
      </div>
      <div className="card_right">
        <div className="img_container">
          <img src="+" alt="" />
        </div>
      </div>
    </div>
  );
}
