import { useDispatch } from "react-redux";
import { handleModal } from "../../features/toplist/modalHandler";

export interface IRateButtonProps {
  movieData: {
    title: string;
    id: number;
    year: string;
    genre: string;
    time: string;
    img: string;
    date: number;
    key: string;
  };
}

export default function RateButton({ movieData }: IRateButtonProps) {
  const dispatch = useDispatch();

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
