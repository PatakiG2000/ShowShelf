import { useDispatch } from "react-redux";
import { handleModal } from "../../features/toplist/modalHandler";

export interface IRateButtonProps {
  customAction(): void;
  movieData: {
    title: string;
    id: number;
    year: number;
    genre: string;
    time: number;
    img: string;
  };
}

export default function RateButton(props: IRateButtonProps) {
  const dispatch = useDispatch();
  const movieData = props.movieData;

  function handleOpen() {
    props.customAction();
    dispatch(handleModal({ open: true, movieData }));
  }

  return (
    <>
      <button onClick={() => handleOpen()} className="btn">
        Rate
      </button>
    </>
  );
}
