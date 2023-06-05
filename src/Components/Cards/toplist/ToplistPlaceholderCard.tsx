export default function ToplistPlaceholderCard() {
  return (
    <div className="card">
      <div className="card_left">
        <div className="card_details">
          <h1>Add your first toplist item! </h1>
          <div className="card_cat">
            <p className="genre"> {} </p>
            <p className="time">{} </p>
          </div>
          <p className="disc">
            Here, you have the power to curate your very own list of the best
            series and shows you've watched. Rate each title based on your
            personal enjoyment and store the results for yourself. Whether it's
            a thrilling drama, a hilarious comedy, or an epic adventure, this is
            your opportunity to highlight your favorites and share your unique
            perspective with others. Adding a show is quite easy. Just click on
            the button mentioning rating, then you can fill out the rating form.
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
