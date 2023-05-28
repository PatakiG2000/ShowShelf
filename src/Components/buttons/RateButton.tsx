import { useDispatch } from "react-redux";
import { handleModal } from "../../features/toplist/modalHandler";

export interface IRateButtonProps {
  movieData: {
    title: string;
    id: number;
    year: string;
    genre: string;
    time: number;
    img: string;
    date: number;
  };
}

export default function RateButton(props: IRateButtonProps) {
  const dispatch = useDispatch();
  const movieData = props.movieData;

  function handleOpen() {
    dispatch(
      handleModal({
        open: true,
        movieData,
      })
    );
  }

  return (
    <>
      <button onClick={() => handleOpen()} className="btn">
        Rate
      </button>
    </>
  );
}
